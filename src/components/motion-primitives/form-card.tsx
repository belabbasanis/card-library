import React from 'react';

export function FormCard() {
  return (
    <div className="w-[379px] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 text-white shadow-lg card-gradient-border">
      <div className="flex items-center gap-4">
        <img
          src="/longform.png"
          alt="Psychology of Conversions"
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-md font-bold">Sign Up to my Newsletter</h1>
          <p className="text-sm text-zinc-400">
            One money move, one reel, one dm
          </p>
        </div>
      </div>

      <form className="mt-4 space-y-3">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md bg-zinc-700/50 px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md bg-zinc-700/50 px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-black py-3 text-center font-semibold text-white transition hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
}