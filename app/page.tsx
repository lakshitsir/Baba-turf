"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Clock, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

export default function Home() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function getSlots() {
      const { data } = await supabase.from('bookings').select('*').order('start_time', { ascending: true });
      if (data) setSlots(data);
    }
    getSlots();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-900 p-6 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-white rotate-45"></div>
          <h1 className="text-sm font-black tracking-[0.4em] uppercase">Babas Turf</h1>
        </div>
        <div className="flex gap-6 text-[10px] tracking-widest uppercase text-zinc-500">
          <span className="hover:text-white cursor-pointer transition-colors">Schedules</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <header className="mb-24 space-y-4">
          <h2 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-8">
            PRIME <br /> COURT.
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-8 border-t border-zinc-900 pt-8">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] max-w-sm">
              The world's most advanced turf booking infrastructure. Optimized for performance.
            </p>
            <div className="flex gap-4">
              <div className="bg-zinc-900 px-4 py-2 rounded-full flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Live Slots</span>
              </div>
            </div>
          </div>
        </header>

        {/* Schedule Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-zinc-900 border border-zinc-900">
          {/* Static High-End Slots for Preview (Real data will sync here) */}
          {["06:00 PM", "07:30 PM", "09:00 PM", "10:30 PM"].map((time, i) => (
            <div key={i} className="bg-black p-10 group hover:bg-zinc-950 transition-all duration-700">
              <div className="flex justify-between items-start mb-12">
                <Clock className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                <span className="text-[10px] text-zinc-600 font-mono">ID: 00{i+1}</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tighter mb-2">{time}</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-8">90 Minute Session</p>
              <button className="w-full border border-zinc-800 py-4 text-[10px] font-black uppercase tracking-[0.3em] group-hover:bg-white group-hover:text-black transition-all">
                Request Access
              </button>
            </div>
          ))}
        </section>
      </main>

      <footer className="p-12 border-t border-zinc-950 flex justify-between items-center opacity-30">
        <p className="text-[9px] tracking-[0.5em] uppercase">Developed by @lakshitpatidar</p>
        <p className="text-[9px] tracking-[0.5em] uppercase">Core Engine V1.0</p>
      </footer>
    </div>
  );
        }
        
