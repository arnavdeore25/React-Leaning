function UserCard({ user }) {
  return (
    <div className="mt-6 rounded-xl border border-gray-200 p-5">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt="GitHub profile"
          className="h-20 w-20 rounded-full"
        />

        <div>
          <h2 className="text-xl font-bold">
            {user.name   || user.login}
          </h2>

          <p className="text-gray-500">
            @{user.login}
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-600">
        {user.bio || "No bio available"}
      </p>

      <div className="mt-4 flex gap-6">
        <div>
          <p className="font-bold">
            {user.public_repos}
          </p>
          <p className="text-sm text-gray-500">
            Repositories
          </p>
        </div>

        <div>
          <p className="font-bold">
            {user.followers}
          </p>
          <p className="text-sm text-gray-500">
            Followers
          </p>
        </div>

        <div>
          <p className="font-bold">
            {user.following}
          </p>
          <p className="text-sm text-gray-500">
            Following
          </p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 block rounded-lg bg-gray-900 py-2 text-center text-white hover:bg-gray-700"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;

