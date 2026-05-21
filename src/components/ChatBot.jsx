// src/components/ChatBot.jsx
import { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";
import { FiArrowUp, FiX } from "react-icons/fi";

const SYSTEM_PROMPT = `You are a friendly and helpful customer support assistant for Seyon Tech Digital Media, a creative digital agency based in Chennai, India.

Answer questions based only on the following company knowledge:

ABOUT:
We are a creative digital agency helping businesses grow with modern technology solutions.

SERVICES:
- Web Development: Modern, responsive and high-performance websites for businesses.
- UI/UX Design: Creative and user-friendly design solutions.
- Branding: Brand identity and strategy.
- SEO: Improve website ranking and online visibility.
- Digital Marketing: Full-service digital marketing solutions.
- AI Automation: Automate workflows and improve business productivity.
- AI Calling: AI calling systems for customer support and lead generation.
- Custom Software: Custom software solutions for startups and businesses.
- Chatbot Development: Smart chatbot solutions for websites and businesses.

PRICING:
Pricing depends on your project requirements. Contact us for a custom quote.

CONTACT:
Email: info@seyontech.com

LOCATION:
Chennai, India.

INDUSTRIES WE SERVE:
Healthcare, Education, Ecommerce and Startups.

Rules:
- Only answer based on the company knowledge above.
- Be friendly, concise and professional.
- If you don't know something, say "Please contact us at info@seyontech.com for more details."
- Keep replies short (2-4 sentences max).`;

// Robot SVG Icon
const RobotIcon = ({ size = 28, color = "white" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna */}
    <line x1="32" y1="4" x2="32" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="4" r="3" fill={color} />
    {/* Head */}
    <rect x="12" y="12" width="40" height="30" rx="6" fill={color} opacity="0.95" />
    {/* Eyes */}
    <circle cx="23" cy="25" r="5" fill="#6C63FF" />
    <circle cx="41" cy="25" r="5" fill="#6C63FF" />
    <circle cx="24" cy="24" r="2" fill="white" />
    <circle cx="42" cy="24" r="2" fill="white" />
    {/* Mouth */}
    <rect x="21" y="34" width="22" height="4" rx="2" fill="#6C63FF" opacity="0.7" />
    {/* Ears */}
    <rect x="6" y="20" width="6" height="10" rx="3" fill={color} />
    <rect x="52" y="20" width="6" height="10" rx="3" fill={color} />
    {/* Neck */}
    <rect x="27" y="42" width="10" height="5" rx="2" fill={color} />
    {/* Body */}
    <rect x="16" y="47" width="32" height="14" rx="5" fill={color} opacity="0.7" />
  </svg>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello 👋 How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && window.innerWidth > 480) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setLoading(true);

    const history = messages.slice(1).map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    history.push({ role: "user", content: userText });

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history,
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.error) {
        let errorMsg = "Something went wrong. Please try again.";
        if (response.status === 429) {
          errorMsg = "Too many requests. Please wait a moment and try again 😊";
        }
        setMessages((prev) => [...prev, { text: errorMsg, sender: "bot" }]);
        return;
      }

      const botReply =
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't get a response. Please try again.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "Something went wrong. Please contact info@seyontech.com.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Robot Button */}
      {!open && (
        <div
          className="chat-toggle"
          onClick={() => setOpen(true)}
          role="button"
          aria-label="Open chat"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        >
          <RobotIcon size={28} color="white" />
          <span className="chat-badge" aria-label="1 new message">1</span>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot" role="dialog" aria-label="Chat support">
          {/* Header with Robot Icon */}
          <div className="chat-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <RobotIcon size={24} color="white" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "15px" }}>Chat Support</h3>
                <p style={{ margin: 0, fontSize: "11px", opacity: 0.8 }}>● Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "flex-end", gap: "6px",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start" }}
              >
                {/* Robot avatar for bot messages */}
                {msg.sender === "bot" && (
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #6C63FF, #a78bfa)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <RobotIcon size={18} color="white" />
                  </div>
                )}
                <div className={msg.sender === "user" ? "user-message" : "bot-message"}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #6C63FF, #a78bfa)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <RobotIcon size={18} color="white" />
                </div>
                <div className="bot-message">Typing...</div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="chat-footer">
            <input
              ref={inputRef}
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              aria-label="Type your message"
              disabled={loading}
            />
            <button onClick={sendMessage} aria-label="Send message" disabled={loading}>
              <FiArrowUp />
            </button>
          </div>
        </div>
      )}
    </>
  );
}