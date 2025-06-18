export async function sendMessagetoGoogleGemini(prompt) {
    const apiKey = 'AIzaSyBPyg6fIUrIXFTmtksZFylg3Vq4wXqZpJU';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]
            }),
        });

        const data = await response.json();
        console.log(data);

        if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "No response from Gemini.";
        }

    } catch (error) {
        console.error("Gemini API error:", error);
        return "An error occurred while generating the response.";
    }
}
