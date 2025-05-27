import React from 'react';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';



export function ProfileCard() {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] px-4">
      <img
        src="/ugcmike.png"
        alt="Profile"
        className="h-32 w-32 rounded-full object-cover"
      />
      <h2 className="mt-4 text-lg font-bold text-zinc-50">@UGCWithMarcus</h2>
      <p className="mt-2 text-center text-sm text-zinc-300">
        Helping you escape the Matrix by teaching you how to become<br />
        financially free !!
      </p>
      <div className="mt-4 flex gap-4">
        <button className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
          <X className="w-6 h-6 text-white" />
        </button>
        <button className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
          <Instagram className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}