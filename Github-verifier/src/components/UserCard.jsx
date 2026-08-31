function UserCard({ user }) {
  return (
    <div className="mt-6 overflow-hidden rounded-[28px] border border-violet-400/20 bg-slate-900/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          src={user.avatar_url}
          alt="GitHub profile"
          className="h-24 w-24 rounded-full border-4 border-violet-400/30 object-cover shadow-lg shadow-violet-950/40 ring-4 ring-slate-800 sm:h-28 sm:w-28"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {user.name || user.login}
            </h2>
            {user.type && (
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                {user.type}
              </span>
            )}
          </div>

          <p className="mt-2 text-base text-violet-300">@{user.login}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            {user.location && (
              <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1">
                {user.location}
              </span>
            )}
            {user.company && (
              <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1">
                {user.company}
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
        {user.bio || "No bio available for this profile yet."}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { label: "Repositories", value: user.public_repos },
          { label: "Followers", value: user.followers },
          { label: "Following", value: user.following },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-center"
          >
            <p className="text-2xl font-black text-white">{item.value}</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/15 focus:outline-none focus:ring-4 focus:ring-violet-400/30"
        >
          View GitHub Profile
        </a>

        <a
          href={`https://github.com/${user.login}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-600 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:border-violet-400 hover:text-violet-200 focus:outline-none focus:ring-4 focus:ring-violet-400/20"
        >
          Repositories
        </a>
      </div>
    </div>
  );
}

export default UserCard;

