"use client";
import React, { useState } from 'react';
import { Plus, Trash2, LayoutDashboard, Settings } from 'lucide-react';

export default function Admin() {
  const [newSlot, setNewSlot] = useState("");

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-900 p-8 hidden md:block">
        <h2 className="font-black tracking-widest text-xs uppercase mb-12">Control Center</h2>
        <nav className="space-y-6">
          <div className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest font-bold">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </div>
          <div className="flex items-center gap-3 text-zinc-600 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors cursor-pointer">
            <Settings className="w-4 h-4" /> System Config
          </div>
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-8 md:p-12">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Babas Turf Manager</h1>
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Manage real-time bookings and schedules</p>
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all">
            Export Data
          </button>
        </header>

        {/* Add New Slot Logic UI */}
        <div className="bg-zinc-950 border border-zinc-900 p-8 mb-12">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">Deploy New Time Slot</h3>
          <div className="flex gap-4">
            <input 
              type="time" 
              className="bg-black border border-zinc-800 p-4 flex-1 text-white focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-zinc-800 hover:bg-white hover:text-black px-8 flex items-center gap-2 transition-all">
              <Plus className="w-4 h-4" /> <span className="text-[10px] font-black uppercase tracking-widest">Create</span>
            </button>
          </div>
        </div>

        {/* Active Slots Table */}
        <div className="space-y-4">
           {[1, 2, 3].map((item) => (
             <div key={item} className="flex justify-between items-center p-6 border border-zinc-900 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-6">
                  <span className="text-zinc-600 font-mono text-xs">Slot 00{item}</span>
                  <span className="text-xl font-bold tracking-tight">07:30 PM - 09:00 PM</span>
                  <span className="bg-green-500/10 text-green-500 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full">Active</span>
                </div>
                <button className="text-zinc-600 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
             </div>
           ))}
        </div>
      </main>
    </div>
  );
}

