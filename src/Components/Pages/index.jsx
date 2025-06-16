import React from "react";

function Index () {
    return (
        <>
            <div className="container my-5">
                <div className="head-title text-center mb-4">
                    <h2>How Can I Help !!</h2>
                </div>
            </div>

            <div className="chat-app mt-5 pt-5">
                <h1 className="heading-chatbot">
                    <i className="bi bi-robot"></i>
                    Chatbot
                </h1>

                <p className="">
                    <i className=""></i>
                </p>

                <h6 className="ai-ans pb-4">
                    <i className="bi bi-robot me-3"></i>
                </h6>

            </div>

            <div className="input-box d-flex align-items-center mt-4">
                <input
                type="text"
                placeholder="Ask You Want..."
                className="form-control me-2"
                aria-label="Chat input"/>
                <i className="bi bi-box-arrow-in-right fs-4text-primary" role="button"></i>
            </div>

        </>
    )
}

export default Index