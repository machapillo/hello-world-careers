"use client";
import Image from 'next/image';
import { useState } from 'react';

 type Media = { type: 'image' | 'video'; src: string; alt?: string; poster?: string };

 const media: Media[] = [
   { type: 'video', src: 'https://assets.coverr.co/videos/coverr-earth-in-space-3432/1080p.mp4', poster: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop', alt: 'Earth' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop', alt: 'City energy' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop', alt: 'Data center' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop', alt: 'Solar' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop', alt: 'Team' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1485827940062-1aa3d44db8ac?q=80&w=1600&auto=format&fit=crop', alt: 'Night city' },
 ];

 export const Gallery = () => {
   const [active, setActive] = useState<Media | null>(null);
   return (
     <section id="gallery" className="section">
       <div className="container">
         <h2 className="h2 mb-6 text-center">ビジュアルで語る、私たちのミッション</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           {media.map((m, i) => (
             <button key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5" onClick={() => setActive(m)}>
               {m.type === 'image' ? (
                 <Image src={m.src} alt={m.alt ?? ''} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
               ) : (
                 <>
                   {m.poster && (
                     <Image src={m.poster} alt={m.alt ?? ''} fill className="object-cover opacity-90" />
                   )}
                   <div className="absolute inset-0 grid place-items-center">
                     <div className="glass px-4 py-2 rounded-full">▶ 再生</div>
                   </div>
                 </>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
             </button>
           ))}
         </div>
       </div>

       {active && (
         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-4" onClick={() => setActive(null)}>
           <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
             {active.type === 'image' ? (
               <div className="relative w-full aspect-video">
                 <Image src={active.src} alt={active.alt ?? ''} fill className="object-cover rounded-xl" />
               </div>
             ) : (
               <div className="relative w-full aspect-video">
                 <video className="w-full h-full rounded-xl" controls autoPlay poster={active.poster}>
                   <source src={active.src} type="video/mp4" />
                 </video>
               </div>
             )}
             <div className="mt-4 text-right">
               <button className="btn-secondary" onClick={() => setActive(null)}>閉じる</button>
             </div>
           </div>
         </div>
       )}
     </section>
   );
 };
