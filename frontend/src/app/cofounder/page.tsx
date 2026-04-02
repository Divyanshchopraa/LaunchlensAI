"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function CofounderPage() {

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI Cofounder. Ask me anything about startups 🚀",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/cofounder/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage.content }),
    });

    const data = await res.json();

    const aiMessage: Message = {
      role: "assistant",
      content: data.reply,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Cofounder
      </h1>

      <div className="border rounded-xl p-4 h-[500px] flex flex-col">

        <div className="flex-1 overflow-y-auto space-y-3">

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-purple-600 text-white ml-auto"
                  : "bg-gray-200"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="text-sm text-gray-500">
              AI Cofounder is thinking...
            </div>
          )}

        </div>

        <div className="mt-4 flex gap-2">

          <input
            className="flex-1 border rounded-lg px-3 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your startup..."
          />

          <button
            onClick={sendMessage}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}