import React from 'react'

function SearchBar({ search, setSearch, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="flex justify-center items-center mt-4">
            <form className="flex items-center w-full max-w-md" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search news..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar