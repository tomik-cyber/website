import React, { useState } from 'react';
import '../styles/Messages.css';

const Messages = () => {
    const [messages, setMessages] = useState([
        { sender: "Nurislam", text: "Hello! I'm interested in your job.", time: "10:00 AM" },
        { sender: "You", text: "Great! Let's discuss the details.", time: "10:05 AM" }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { sender: "You", text: newMessage, time: "Now" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="messages-container">
            <h1>Chat with Freelancers</h1>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
                        <p><strong>{msg.sender}:</strong> {msg.text}</p>
                        <span className="time">{msg.time}</span>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;
