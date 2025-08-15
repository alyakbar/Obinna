"use client"
import React, { useRef, useState } from "react"

const knowledgeBase: Record<string, string> = {
  followers: "417K Instagram · 66.4K YouTube · 200K Facebook",
  services: `Professional Services:
• Event MC – $3,000 (2–8 hours)
• Brand Influencing – $15,000/month (SMEs) to $115,830/year (Corporate)
• Apology Package – Customizable (1–2 hours)
• Special Appearance – $1,500 (1–3 hours)
• Event Management – $3,000 (full service)
• Sound & DJ Services – $1,500 (4–12 hours)
• Event Photography – $1,500 (4–8 hours)
• Meet & Greet – $1,500 (30–60 minutes)`,
  packages: `Service Packages:
• Essential – KSh 75,000 (Half Day Event: 4-hour hosting, MC services, basic sound, timeline management, consultation)
• Premium – KSh 150,000 (Full Day: MC + Comedy, sound coordination, planning consultation, social coverage, content, VIP meet & greet)
• Elite – KSh 300,000 (Multi-Day: full entertainment, brand integration, content creation, photography, merchandise, VIP experience)`,
  booking: `To book Obinna:
Email: booking@ogaobinna.com
Phone/WhatsApp: +254 798 663936
Booking inquiries: within 24 hours
Event confirmations: within 48 hours
Urgent requests: same-day response
Booking recommended 2–4 weeks in advance; rush bookings may incur additional fees`,
  phone: "You can reach Obinna at +254 798 663936.",
  email: "You can email Obinna at booking@ogaobinna.com.",
  pricing: "Pricing depends on the type of event. Please contact Obinna directly for an exact quote.",
  contact: `Email: booking@ogaobinna.com
Phone: +254 798 663936 (Text or WhatsApp only)`,
  location: "Location: Nairobi, Kenya (Based in East Africa’s entertainment hub)",
  hours: `Business Hours:
Mon–Fri: 9:00 AM – 6:00 PM
Sat: 10:00 AM – 4:00 PM
Sunday: Closed`,
  bio: `Oga Obinna (Steve Thompson Magana) is a Kenyan entertainer, comedian, radio host, media personality and content creator known for blending storytelling with contemporary humor.
Originating from university comedy stages, he's evolved into East Africa’s premier entertainer with 13+ years in comedy, radio, digital, live events, brand partnerships, and motivational speaking.`,
  hello: "Hello! How can I help you today?",
}

function getBotResponse(userInput: string) {
  const input = userInput.toLowerCase()
  if (input.includes("followers")) return knowledgeBase.followers
  if (input.includes("service")) return knowledgeBase.services
  if (input.includes("package")) return knowledgeBase.packages
  if (input.includes("book")) return knowledgeBase.booking
  if (input.includes("phone")) return knowledgeBase.phone
  if (input.includes("email")) return knowledgeBase.email
  if (input.includes("price")) return knowledgeBase.pricing
  if (input.includes("contact")) return knowledgeBase.contact
  if (input.includes("location")) return knowledgeBase.location
  if (input.includes("hour")) return knowledgeBase.hours
  if (input.includes("bio")) return knowledgeBase.bio
  if (input.includes("hello") || input.includes("hi")) return knowledgeBase.hello
  return "I'm not sure about that. Could you ask something else?"
}

export default function ObinnaBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const addMessage = (text: string, sender: "bot" | "user") => {
    setMessages((prev) => [...prev, { sender, text }])
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const sendMessage = () => {
    if (!input.trim()) return
    addMessage(input, "user")
    setTimeout(() => {
      addMessage(getBotResponse(input), "bot")
    }, 500)
    setInput("")
  }

  return (
    <>
      <div
        id="chatbot-icon"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          background: "#FFD700", // Changed to match other button color
          borderRadius: "50%",
          display: open ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#0E0E0E", // Changed to match button text color
          fontSize: 30,
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
      >
        💬
      </div>
      <div
        id="chatbot-window"
        style={{
          position: "fixed",
          bottom: 90,
          right: 20,
          width: 320,
          maxHeight: 500,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          display: open ? "flex" : "none",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <div
          id="chatbot-header"
          style={{
            background: "#FFD700", // Changed to match other button color
            color: "#0E0E0E", // Changed to match button text color
            padding: 10,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Oga Obinna Bot
          <span
            id="chatbot-close"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
          >
            ✖
          </span>
        </div>
        <div
          id="chatbot-messages"
          style={{
            flex: 1,
            padding: 10,
            overflowY: "auto",
            fontSize: 14,
            background: "#fafafa",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === "bot" ? "bot-message" : "user-message"}
              style={{
                background: msg.sender === "bot" ? "#f1f1f1" : "#FFD700", // Changed user message color
                color: msg.sender === "bot" ? "#222" : "#0E0E0E", // Changed user message text color
                padding: 8,
                borderRadius: 8,
                marginBottom: 8,
                maxWidth: "80%",
                marginLeft: msg.sender === "bot" ? undefined : "auto",
                whiteSpace: "pre-line",
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div
          id="chatbot-input-area"
          style={{
            display: "flex",
            borderTop: "1px solid #ccc",
            background: "#fff",
          }}
        >
          <input
            type="text"
            id="chatbot-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage()
            }}
            style={{
              flex: 1,
              padding: 10,
              border: "none",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            id="chatbot-send"
            onClick={sendMessage}
            style={{
              background: "#FFD700", // Changed to match other button color
              color: "#0E0E0E", // Changed to match button text color
              border: "none",
              padding: "10px 14px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  )
}