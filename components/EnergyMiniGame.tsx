"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Simple Sensors × AI × Energy mini-game
// Goal: keep the grid stability close to target by tuning AI weights for 3 sensors.
// Score is based on average absolute error over the round.

const DURATION_MS = 30000; // 30s round

export const EnergyMiniGame = () => {
  const [w, setW] = useState<[number, number, number]>([0.33, 0.33, 0.34]);
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION_MS);
  const [score, setScore] = useState<number | null>(null);
  const raf = useRef<number | null>(null);
  const startTs = useRef<number | null>(null);
  const errAcc = useRef(0);
  const ticks = useRef(0);

  const target = 1.0; // target stability level

  const sensors = useMemo(() => {
    // base frequency for each sensor
    const base = [0.8, 1.1, 0.9];
    // small random phase and volatility
    const phase = [Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI];
    const vol = [0.16, 0.14, 0.18];
    return { base, phase, vol };
  }, [running]);

  const getSensors = (t: number) => {
    return sensors.base.map((b, i) => {
      const noise = Math.sin(t/800 + sensors.phase[i])*sensors.vol[i] + (Math.random()-0.5)*0.04;
      return Math.max(0.5, Math.min(1.5, b + noise));
    }) as [number, number, number];
  };

  const loop = (now: number) => {
    if (!startTs.current) startTs.current = now;
    const t = now - startTs.current;
    const s = getSensors(now);
    const output = s[0]*w[0] + s[1]*w[1] + s[2]*w[2];
    const err = Math.abs(output - target);
    errAcc.current += err;
    ticks.current += 1;

    setTimeLeft(Math.max(0, DURATION_MS - t));

    if (t < DURATION_MS) {
      raf.current = requestAnimationFrame(loop);
    } else {
      const avgErr = errAcc.current / Math.max(1, ticks.current);
      const sc = Math.max(0, Math.round(100 - avgErr*100)); // 0-100
      setScore(sc);
      setRunning(false);
    }
  };

  const start = () => {
    setScore(null);
    setRunning(true);
    setTimeLeft(DURATION_MS);
    errAcc.current = 0; ticks.current = 0; startTs.current = null;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(loop);
  };

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const secs = Math.ceil(timeLeft/1000);

  return (
    <div className="card p-4 md:p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-lg">Sensor × AI × Energy</h3>
        <span className="text-xs text-gray-400">バランスを保て</span>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-3">
        {[0,1,2].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 p-3">
            <div className="text-xs text-gray-400 mb-1">Sensor {i+1}</div>
            <input
              type="range" min={0} max={1} step={0.01}
              value={w[i]}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                const next: [number, number, number] = [...w] as any;
                next[i] = val;
                // normalize so weights sum ~1
                const sum = next[0]+next[1]+next[2] || 1;
                setW([next[0]/sum, next[1]/sum, next[2]/sum]);
              }}
              className="w-full"
            />
            <div className="text-xs text-gray-300 mt-1">w{i+1}: {(w[i]*100)|0}%</div>
          </div>
        ))}
      </div>

      <div className="relative flex-1 rounded-lg border border-white/10 overflow-hidden bg-black/20">
        <EnergyScope weights={w} target={target} running={running} getSensors={getSensors} />
        <div className="absolute top-2 right-2 text-xs text-gray-400">{running ? `${secs}s` : "Ready"}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button onClick={start} disabled={running} className="btn glass disabled:opacity-60">{running ? "Running..." : "Start"}</button>
        <div className="text-sm">
          {score === null ? <span className="text-gray-400">平均誤差が少ないほど高得点</span> :
            <motion.span initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="font-semibold">Score: {score}</motion.span>}
        </div>
      </div>
    </div>
  );
};

const EnergyScope = ({ weights, target, running, getSensors }: {
  weights: [number, number, number];
  target: number;
  running: boolean;
  getSensors: (t:number)=>[number,number,number];
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const cvs = canvasRef.current!;
    const ctx = cvs.getContext('2d')!;
    let alive = true;

    const render = (now:number) => {
      if (!alive) return;
      const w = cvs.width, h = cvs.height;
      // background grid
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = "#000000"; ctx.globalAlpha = 0.25; ctx.fillRect(0,0,w,h);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.06)"; ctx.lineWidth = 1;
      for (let x=0; x<w; x+=22) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
      for (let y=0; y<h; y+=22) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }

      // target line
      const ty = (1 - target/2) * h; // map 0..2 to canvas
      ctx.strokeStyle = "rgba(94,234,212,0.7)"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, ty); ctx.lineTo(w, ty); ctx.stroke();

      const sensors = getSensors(now);
      const output = sensors[0]*weights[0] + sensors[1]*weights[1] + sensors[2]*weights[2];

      // plot sensors
      const colors = ["#60a5fa", "#34d399", "#f59e0b"]; // blue, teal, amber
      sensors.forEach((sv, i) => {
        const y = (1 - sv/2) * h;
        ctx.fillStyle = colors[i];
        ctx.globalAlpha = 0.8;
        ctx.beginPath(); ctx.arc((now/12 + i*40)%w, y, 3, 0, Math.PI*2); ctx.fill();
      });

      // output pulse
      const oy = (1 - output/2) * h;
      const grad = ctx.createLinearGradient(0, oy-6, 0, oy+6);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(0.5, "rgba(255,255,255,0.8)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad; ctx.lineWidth = 4; ctx.globalAlpha = 0.9;
      ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.stroke();

      // energy beam
      const bx = (now/8)%w;
      const beam = ctx.createLinearGradient(bx-80, 0, bx+80, 0);
      beam.addColorStop(0, "rgba(0,195,137,0)");
      beam.addColorStop(0.5, "rgba(0,195,137,0.5)");
      beam.addColorStop(1, "rgba(0,195,137,0)");
      ctx.fillStyle = beam; ctx.fillRect(bx-80, 0, 160, h);

      if (running) raf.current = requestAnimationFrame(render);
    };

    const resize = () => {
      const parent = cvs.parentElement!;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cvs.width = parent.clientWidth * dpr;
      cvs.height = Math.max(180, parent.clientHeight) * dpr;
      cvs.style.width = parent.clientWidth + "px";
      cvs.style.height = Math.max(180, parent.clientHeight) + "px";
    };

    resize();
    raf.current = requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    return () => { alive = false; if (raf.current) cancelAnimationFrame(raf.current); window.removeEventListener('resize', resize); };
  }, [weights, target, running, getSensors]);

  return <canvas ref={canvasRef} className="w-full h-[220px] md:h-[280px] block" />;
};

export default EnergyMiniGame;
