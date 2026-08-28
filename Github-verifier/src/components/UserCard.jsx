function UserCard({ user }) {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50/60 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
      <div className="flex items-center gap-4 sm:gap-5">
        <img
          src={user.avatar_url}
          alt="GitHub profile"
          className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover shadow-md ring-2 ring-orange-100 sm:h-24 sm:w-24"
        />

        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {user.name || user.login}
          </h2>

          <p className="mt-1 truncate text-sm text-orange-700">@{user.login}</p>
        </div>
      </div>

      <p className="mt-5 break-words text-sm leading-relaxed text-gray-600 sm:text-base">
        {user.bio || "No bio available"}
      </p>

      <div className="mt-5 grid grid-cols-3 divide-x divide-gray-200 rounded-xl border border-gray-200 bg-white/80 py-3 text-center shadow-sm">
        <div className="px-2">
          <p className="text-lg font-bold text-gray-900">{user.public_repos}</p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">Repositories</p>
        </div>

        <div className="px-2">
          <p className="text-lg font-bold text-gray-900">{user.followers}</p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">Followers</p>
        </div>

        <div className="px-2">
          <p className="text-lg font-bold text-gray-900">{user.following}</p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">Following</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 block rounded-xl bg-gray-900 py-3 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300 active:translate-y-0 sm:rounded-lg"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;

