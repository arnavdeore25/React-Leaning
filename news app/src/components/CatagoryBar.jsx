import React from 'react'

function CatagoryBar({ category, setCategory }) {
    const categories = [
        "general",
        "technology",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
    ];

    return (
        <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Select Category</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        className={`px-4 py-2 rounded-lg ${item === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {item}
                    </button>
                ))}
            </div>
            <p className="text-lg mt-4">Selected category: {category}</p>
        </div>
    );
}

export default CatagoryBar