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
      className="flex flex-col gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-2 shadow-inner sm:flex-row sm:rounded-xl"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 hover:border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-lg"
      />

      <button
        type="submit"
        className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200 active:translate-y-0 active:scale-[0.98] sm:rounded-lg"
      >
        Verify
      </button>
    </form>
  );
}

export default SearchBar;


