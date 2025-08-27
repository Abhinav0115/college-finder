import { useState } from "react";

export default function SearchForm({ onSearch, loading, darkMode }) {
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [sortBy, setSortBy] = useState("name");

    // Handle form submit and pass search params to parent
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ country, name, sortBy });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 md:flex-row items-center justify-center mb-8 bg-gradient-to-r p-6 rounded-xl shadow-lg w-full ${darkMode ? "from-gray-800 to-gray-900" : "from-cyan-200 to-cyan-200"}`}
        >
            {/* Country input */}
            <input
                type="text"
                placeholder="Country (e.g. United States)"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={`border-2 p-3 rounded-lg w-full md:w-1/3 transition ${darkMode ? "border-cyan-700 focus:border-cyan-400 focus:ring-teal-900 bg-gray-900 text-gray-100" : "border-cyan-300 focus:border-cyan-500 focus:ring-teal-200 bg-white"}`}
            />
            {/* University name input */}
            <input
                type="text"
                placeholder="University Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border-2 p-3 rounded-lg w-full md:w-1/3 transition ${darkMode ? "border-cyan-700 focus:border-cyan-400 focus:ring-teal-900 bg-gray-900 text-gray-100" : "border-cyan-300 focus:border-cyan-500 focus:ring-teal-200 bg-white"}`}
            />
            {/* Sort dropdown */}
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`border-2 p-3 rounded-lg w-full md:w-1/4 transition cursor-pointer ${darkMode ? "border-cyan-700 focus:border-cyan-400 focus:ring-teal-900 bg-gray-900 text-gray-100" : "border-cyan-300 focus:border-cyan-500 focus:ring-teal-200 bg-white"}`}
            >
                <option value="name">Sort by Name</option>
                <option value="country">Sort by Country</option>
            </select>

            <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto cursor-pointer ${darkMode ? "bg-cyan-700 hover:bg-teal-800" : "bg-cyan-600 hover:bg-teal-700"} text-white`}
            >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}
