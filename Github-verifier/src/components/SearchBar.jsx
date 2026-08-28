import { useState } from "react";

function SearchBar({ searchUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchUser(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-orange-900"
      />

      <button
        type="submit"
        className="rounded-lg bg-orange-600 px-5 py-2 text-white hover:bg-orange-900"
      >
        Verify
      </button>
    </form>
  );
}

export default SearchBar;


