import React, { useState } from "react";
import { sendMessagetoGoogleGemini } from "../ChatCompo";

function Index() {
const [inputValue, setInputValue] = useState("");
const [messages, setMessages] = useState([]);
const [isStarted, setIsStarted] = useState(false);
const [waiting, setWaiting] = useState(false);

const handleSubmit = async () => {
    const prompt = inputValue.trim();
    if (!prompt) return;

    if (!isStarted) setIsStarted(true);
    setMessages(prev => [...prev, { text: prompt, sender: "user" }]);
    setInputValue("");
    setWaiting(true);

    try {
    const reply = await sendMessagetoGoogleGemini(prompt);
    setMessages(prev => [...prev, { text: reply, sender: "gemini" }]);
    } catch {
    setMessages(prev => [
        ...prev,
        { text: "Could not fetch response.", sender: "gemini" }
    ]);
    } finally {
    setWaiting(false);
    }
};

return (
    <>
    <div className="container my-5">
        {!isStarted && (
        <div className="head-title text-center mb-4">
            <h2>HowCan I Help !!</h2>
        </div>
        )}
    </div>

    {isStarted && (
        <div className="chat-app mt-5 pt-5">
        <h1 className="heading-chatbot">
            <i className="bi bi-robot" /> Chatbot
        </h1>

        {messages.map((msg, idx) => (
            <p
            key={idx}
            className={`${msg.sender === "user" ? "my-chat" : "ai-ans"} pb-2`}
            >
            <i
                className={`bi ${
                msg.sender === "user"
                    ? "bi-person-circle me-3"
                    : "bi-robot me-3"
                }`}
            />
            {msg.text}
            </p>
        ))}

        {waiting && (
            <h6 className="ai-ans pb-4">
            <i className="bi bi-robot me-3" /> Typing…
            </h6>
        )}
        </div>
    )}

    <div className="input-box d-flex align-items-center mt-4">
        <input
        className="form-control me-2"
        type="text"
        placeholder="Ask what you want…"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
            if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
            }
        }}
        />
        <i
        role="button"
        className="bi bi-box-arrow-in-right fs-4 text-primary"
        onClick={handleSubmit}
        />
    </div>
    </>
);
}

export default Index;
