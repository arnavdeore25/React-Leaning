import { useState } from "react";

function SearchBar({ searchUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/10 bg-slate-900/60 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block flex-1">
          <span className="sr-only">GitHub username</span>
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M10.5 18a7.5 7.5 0 1 1 5.303-12.803A7.5 7.5 0 0 1 10.5 18Zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm8.5 6-4.35-4.35 1.4-1.4L20.4 20.6l-1.4 1.4Z" fill="currentColor"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 py-3.5 pl-12 pr-4 text-base text-white placeholder:text-slate-400 outline-none transition duration-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/20"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 focus:outline-none focus:ring-4 focus:ring-violet-400/30 active:translate-y-0"
        >
          Verify profile
        </button>
      </div>
    </form>
  );
}

export default SearchBar;


