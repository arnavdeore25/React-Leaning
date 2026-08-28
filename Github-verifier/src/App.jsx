

import { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = async (username) => {
    if (username === "") {
      setError("Username please");
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUser(response.data);
    } catch (error) {
      setError("GitHub user not found");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-3xl font-bold">
          GitHub Verifier
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Check if GitHub username exists or not
        </p>

        <div className="mt-8 rounded-xl bg-white p-5 shadow">
          <SearchBar searchUser={searchUser} />

          {loading && (
            <p className="mt-5 text-center text-blue-500">
              Checking...
            </p>
          )}

          {error && (
            <p className="mt-5 text-center text-red-500">
              {error}
            </p>
          )}

          {user && <UserCard user={user} />}
        </div>
      </div>
    </div>
  );
}

export default App;