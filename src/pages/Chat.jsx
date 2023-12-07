// src/Chat.js
import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    // You can add your chatbot logic here and update the messages accordingly.

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen mt-5">
      <div className="flex-1 bg-[#fff] p-4 overflow-y-auto rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 ${
              message.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="py-5 rounded-md">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border rounded p-2 w-full"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white py-2 px-10 mt-2 rounded float-right"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
