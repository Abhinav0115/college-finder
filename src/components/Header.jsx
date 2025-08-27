import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
    return (
        <header
            className={`w-full py-4 mb-4 px-6 flex items-center justify-between`}
        >
            <div></div>
            <h1
                className={`text-4xl font-bold tracking-tight ${darkMode ? "text-cyan-300" : "text-cyan-700"}`}
            >
                College Finder
            </h1>
            {/* Dark/Light mode toggle button */}
            <button
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode((prev) => !prev)}
                className={`ml-4 p-2 cursor-pointer rounded-full border ${darkMode ? "border-teal-600 bg-gray-800 hover:bg-teal-900" : "border-teal-300 bg-white hover:bg-teal-100"} shadow transition`}
            >
                {darkMode ? (
                    <FaSun className="h-6 w-6 text-yellow-400" />
                ) : (
                    <FaMoon className="h-6 w-6 text-gray-700" />
                )}
            </button>
        </header>
    );
}
