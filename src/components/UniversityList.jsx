import UniversityCard from "./UniversityCard";

export default function UniversityList({
    universities,
    loading,
    darkMode,
    totalCount,
    hasSearched,
}) {
    // Show loading spinner if data is being fetched
    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
            </div>
        );
    }

    // Show a different message if no search has been performed
    if (!universities.length) {
        if (!hasSearched) {
            return (
                <p className="text-center text-gray-400 mt-8">
                    Search for universities by country or name above.
                </p>
            );
        }
        return (
            <p className="text-center text-gray-500 mt-8">No results found.</p>
        );
    }

    return (
        <div className="mt-6 w-full">
            {/* overall total results */}
            <div className="mb-4 text-center">
                <span
                    className={`inline-block px-4 py-2 rounded-full font-semibold shadow ${darkMode ? "bg-cyan-900 text-teal-200" : "bg-cyan-100 text-teal-700"}`}
                >
                    Total Results: {totalCount}
                </span>
            </div>
            {/* University cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {universities.map((uni, index) => (
                    <UniversityCard key={index} uni={uni} darkMode={darkMode} />
                ))}
            </ul>
        </div>
    );
}
