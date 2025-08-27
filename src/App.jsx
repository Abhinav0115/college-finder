import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import UniversityList from "./components/UniversityList";
import Header from "./components/Header";

function App() {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(12);
    const [hasSearched, setHasSearched] = useState(false);

    // Handle dark mode toggle by adding/removing 'dark' class on <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // Fetch universities from Netlify function (acts as a proxy)
    const fetchUniversities = async ({ country, name, sortBy }) => {
        setLoading(true);
        setHasSearched(true);

        try {
            const params = {};
            if (country) params.country = country;
            if (name) params.name = name;

            const response = await axios.get(
                `/.netlify/functions/universities`,
                { params }
            );

            let data = response.data;

            console.log("Raw API data:", data); // Debugging

            // Sort results by name or country safely
            let sortedData = [...data];
            if (sortBy === "name") {
                sortedData.sort((a, b) =>
                    (a.name || "").localeCompare(b.name || "")
                );
            } else if (sortBy === "country") {
                sortedData.sort((a, b) =>
                    (a.country || "").localeCompare(b.country || "")
                );
            }

            setUniversities(sortedData);
            setCurrentPage(1);
        } catch (error) {
            console.error("Error fetching universities:", error);
            setUniversities([]);
        } finally {
            setLoading(false);
        }
    };

    // Pagination logic
    const totalPages = Math.ceil(universities.length / pageSize);
    const paginatedUniversities = universities.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gray-900 text-gray-100"
                    : "bg-gray-50 text-gray-900"
            } transition-colors duration-300`}
        >
            <div className="max-w-6xl mx-auto p-4">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <SearchForm
                    onSearch={fetchUniversities}
                    loading={loading}
                    darkMode={darkMode}
                    color="cyan"
                />

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-cyan-500 border-opacity-50 mb-4"></div>
                        <span className="text-lg text-cyan-600 dark:text-cyan-300 font-semibold">
                            Searching universities...
                        </span>
                    </div>
                ) : (
                    <>
                        <UniversityList
                            universities={paginatedUniversities}
                            loading={loading}
                            darkMode={darkMode}
                            totalCount={universities.length}
                            hasSearched={hasSearched}
                        />

                        {universities.length === 0 && hasSearched && (
                            <div className="text-center mt-8 text-red-500 font-semibold">
                                No universities found or failed to fetch data.
                            </div>
                        )}

                        {universities.length > pageSize && (
                            <div className="flex justify-center items-center gap-2 mt-8">
                                <button
                                    onClick={() =>
                                        setCurrentPage((p) =>
                                            Math.max(1, p - 1)
                                        )
                                    }
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded bg-cyan-600 hover:bg-teal-600 dark:bg-cyan-700 dark:hover:bg-teal-700 text-white font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    Prev
                                </button>
                                <span className="mx-2 text-cyan-700 dark:text-cyan-500 font-semibold">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={() =>
                                        setCurrentPage((p) =>
                                            Math.min(totalPages, p + 1)
                                        )
                                    }
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 rounded bg-cyan-600 hover:bg-teal-600 dark:bg-cyan-700 dark:hover:bg-teal-700 text-white font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
