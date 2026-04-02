"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";
import ChatMessage from "./chat-message";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI Cofounder 🚀 Ask me anything about startups."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/cofounder/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage.content })
    });

    const data = await res.json();

    const aiMessage: Message = {
      role: "assistant",
      content: data.reply
    };

    setMessages(prev => [...prev, aiMessage]);
    setLoading(false);
  };

  return (
    <>
   

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <Bot className="w-6 h-6" />
      </button>

 

      {open && (

        <div className="fixed bottom-20 right-6 w-80 h-[450px] bg-white border rounded-xl shadow-xl flex flex-col">

      

          <div className="p-3 border-b font-semibold flex items-center gap-2">
            <Bot className="w-4 h-4"/>
            AI Cofounder
          </div>

       
          <div className="flex-1 overflow-y-auto p-3 space-y-3">

            {messages.map((msg, i) => (
              <ChatMessage
                key={i}
                role={msg.role}
                content={msg.content}
              />
            ))}

            {loading && (
              <div className="text-xs text-gray-500">
                AI is thinking...
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>


          <div className="p-2 border-t flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your startup..."
              className="flex-1 border rounded-md px-2 py-1 text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
            >
              <Send className="w-4 h-4"/>
            </button>

          </div>

        </div>

      )}
    </>
  );
}