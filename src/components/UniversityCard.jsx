export default function UniversityCard({ uni, darkMode }) {
    return (
        <li
            className={`rounded-xl shadow-lg p-6 flex flex-col gap-2 hover:shadow-xl transition h-full w-full ${darkMode ? "bg-gray-800 border-cyan-700" : "bg-white border-cyan-200 border"}`}
        >
            <div className="flex-1">
                <h2
                    className={`text-2xl font-bold mb-1 ${darkMode ? "text-cyan-300" : "text-cyan-700"}`}
                >
                    {uni.name}
                </h2>
                <p
                    className={`text-base font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}
                >
                    {uni.country}
                </p>
                {uni["state-province"] && (
                    <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                        State/Province: {uni["state-province"]}
                    </p>
                )}
                <p
                    className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                    Domains: {uni.domains.join(", ")}
                </p>
            </div>
            <div className="mt-4 flex justify-end">
                <a
                    href={uni.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center inline-block font-semibold shadow transition px-4 py-2 rounded-lg text-white ${darkMode ? "bg-cyan-700 hover:bg-teal-800" : "bg-cyan-600 hover:bg-teal-700"}`}
                >
                    Visit Website
                </a>
            </div>
        </li>
    );
}
