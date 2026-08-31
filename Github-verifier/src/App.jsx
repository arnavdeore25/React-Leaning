

import { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = async (username) => {
    if (username.trim() === "") {
      setError("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username.trim()}`
      );

      setUser(response.data);
    } catch (error) {
      setError("GitHub user not found");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            GitHub Verifier
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Find and inspect any GitHub profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Search a username and instantly preview profile details, activity, and public stats in a clean dashboard.
          </p>
        </header>

        <main className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),transparent_30%)]" />

          <div className="relative">
            <SearchBar searchUser={searchUser} />

            {loading && (
              <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-200">
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
                Checking GitHub profile...
              </div>
            )}

            {error && (
              <div className="mt-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-center text-sm font-medium text-rose-200">
                {error}
              </div>
            )}

            {user && <UserCard user={user} />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;