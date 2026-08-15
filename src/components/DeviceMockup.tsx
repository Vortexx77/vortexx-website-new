import React from 'react';
import type { Project } from '../data/projects';

export const DeviceMockup: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className={`relative w-full h-full bg-gradient-to-br ${project.mockupBg} flex items-center justify-center overflow-hidden`}
  >
    {/* Ambient glow */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${project.accentColor}55, transparent 70%)`,
      }}
    />

    {/* Device frame group */}
    <div className="relative z-10 scale-75 origin-center">
      {/* Desktop / laptop frame */}
      <div className="w-[220px] bg-gray-950/90 rounded-lg border border-white/10 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-900/80 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <span className="w-2 h-2 rounded-full bg-green-400/70" />
          <div className="ml-2 flex-1 h-3 rounded bg-white/5 text-[7px] text-white/30 flex items-center px-2 font-mono truncate">
            vortexx.co/{project.id}
          </div>
        </div>
        {/* Fake page content */}
        <div className="p-3 space-y-1.5">
          <div className="h-10 rounded" style={{ background: `${project.accentColor}22` }} />
          <div className="h-2 rounded bg-white/10 w-3/4" />
          <div className="h-2 rounded bg-white/10 w-1/2" />
          <div className="grid grid-cols-3 gap-1 mt-2">
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
          </div>
          <div className="h-2 rounded bg-white/10 w-full mt-1" />
          <div className="h-2 rounded bg-white/10 w-2/3" />
        </div>
      </div>

      {/* Phone frame – overlapping bottom-right */}
      <div className="absolute -right-10 top-4 w-[72px] bg-gray-950/90 rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="h-3 bg-gray-900/80 border-b border-white/10 flex items-center justify-center">
          <div className="w-8 h-1.5 rounded-full bg-white/10" />
        </div>
        <div className="p-1.5 space-y-1">
          <div className="h-10 rounded" style={{ background: `${project.accentColor}22` }} />
          <div className="h-1.5 rounded bg-white/10" />
          <div className="h-1.5 rounded bg-white/10 w-2/3" />
          <div className="h-5 rounded bg-white/5" />
        </div>
      </div>
    </div>
  </div>
);
