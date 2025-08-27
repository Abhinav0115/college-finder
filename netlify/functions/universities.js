export const handler = async function (event) {
    const { name, country } = event.queryStringParameters || {};
    const params = new URLSearchParams();
    if (name) params.append("name", name);
    if (country) params.append("country", country);

    const url = `http://universities.hipolabs.com/search?${params.toString()}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
    } catch (err) {
        console.error("Function error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch universities." }),
        };
    }
};
