"use client";
import { useState } from "react";
import Link from "next/link";

const templates = [
  {
    id: 1,
    name: "Classic Orange",
    className:
      "bg-orange-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[300px] min-h-[180px]",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-2xl font-bold mb-2">Thank You, {name}!</h2>
        <p className="text-lg">{message}</p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Elegant Border",
    className:
      "border-2 border-orange-500 text-orange-600 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px]",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Appreciation for {name}</h2>
        <p className="italic">{message}</p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Minimalist Card",
    className:
      "bg-white border border-orange-200 text-orange-500 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px]",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-xl font-medium mb-2">{name}</h2>
        <p className="text-base">{message}</p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Bold Header",
    className:
      "bg-orange-100 text-orange-700 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] border-2 border-orange-300",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-2xl font-extrabold mb-2">{name}</h2>
        <p className="text-lg font-light">{message}</p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Modern Block",
    className:
      "bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] shadow-xl",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-base">{message}</p>
      </div>
    ),
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [templateIdx, setTemplateIdx] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [copyMe, setCopyMe] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  // For image download
  const handleDownload = async () => {
    setError("");
    setDownloadUrl(null);
    const html2canvas = (await import("html2canvas")).default;
    const el = document.getElementById("template-preview");
    if (!el) return;
    const canvas = await html2canvas(el);
    const url = canvas.toDataURL("image/png");
    setDownloadUrl(url);
  };

  // For sending email
  const handleSend = async () => {
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/sendAppreciation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          message,
          templateIdx,
          recipientEmail,
          copyMe,
          userEmail,
        }),
      });
      if (!res.ok) throw new Error("Failed to send email");
      setStep(4);
    } catch (_e) {
      setError("Failed to send email. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // Hero Section
  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-orange-700">
        <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-orange-600 max-w-2xl">
            How did you feel when you were last recognized?
          </h1>
          <p className="text-lg mb-8 max-w-xl text-orange-500">
            Recognizing others boosts morale, builds trust, and creates a positive culture. Start appreciating someone today!
          </p>
          <button
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition"
            onClick={() => setStep(1)}
          >
            Start Appreciating
          </button>
        </section>
        <footer className="w-full text-center py-6 border-t border-orange-100 mt-auto bg-white">
          <span className="text-orange-500">Powered by </span>
          <Link href="https://techpremi.com" className="text-orange-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">TechPremi.com</Link>
        </footer>
      </div>
    );
  }

  // Step 1: Name
  if (step === 1) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <h2 className="text-2xl font-bold mb-4">Who are you recognizing?</h2>
        <input
          className="border border-orange-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6 w-80"
          placeholder="Enter their name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus
        />
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => setStep(2)}
          disabled={!name.trim()}
        >
          Next
        </button>
      </section>
    );
  }

  // Step 2: Message
  if (step === 2) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <h2 className="text-2xl font-bold mb-4">What would you like to say?</h2>
        <textarea
          className="border border-orange-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6 w-80 min-h-[100px]"
          placeholder="Write your appreciation message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          autoFocus
        />
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => setStep(3)}
          disabled={!message.trim()}
        >
          Next
        </button>
      </section>
    );
  }

  // Step 3: Template Selection
  if (step === 3) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <h2 className="text-2xl font-bold mb-6">Choose a template</h2>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {templates.map((tpl, idx) => (
            <div
              key={tpl.id}
              className={`cursor-pointer border-2 transition-all duration-200 ${templateIdx === idx ? "border-orange-600 scale-105" : "border-transparent"}`}
              onClick={() => setTemplateIdx(idx)}
            >
              <div id={templateIdx === idx ? "template-preview" : undefined} className={tpl.className} style={{ width: 320, height: 200 }}>
                {tpl.render(name, message)}
              </div>
              <div className="mt-2 text-sm font-medium text-orange-700">{tpl.name}</div>
            </div>
          ))}
        </div>
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => setStep(4)}
          disabled={templateIdx === null}
        >
          Next
        </button>
      </section>
    );
  }

  // Step 4: Email/Download
  if (step === 4) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <h2 className="text-2xl font-bold mb-4">How would you like to share?</h2>
        <div className="flex flex-col gap-4 items-center mb-6">
          <input
            className="border border-orange-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-80"
            placeholder="Recipient's email"
            value={recipientEmail}
            onChange={e => setRecipientEmail(e.target.value)}
            type="email"
          />
          <label className="flex items-center gap-2 text-orange-700">
            <input
              type="checkbox"
              checked={copyMe}
              onChange={e => setCopyMe(e.target.checked)}
            />
            Copy me on this email
          </label>
          {copyMe && (
            <input
              className="border border-orange-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-80"
              placeholder="Your email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              type="email"
            />
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition disabled:opacity-50"
            onClick={handleSend}
            disabled={!recipientEmail || (copyMe && !userEmail) || sending}
          >
            {sending ? "Sending..." : "Send Email"}
          </button>
          <button
            className="bg-white border border-orange-500 text-orange-600 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-50 transition"
            onClick={handleDownload}
          >
            Download as Image
          </button>
        </div>
        {downloadUrl && (
          <div className="mt-6 flex flex-col items-center">
            <a
              href={downloadUrl}
              download={`appreciation-for-${name}.png`}
              className="bg-orange-500 text-white px-6 py-2 rounded-full mt-2"
            >
              Click to Download
            </a>
          </div>
        )}
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </section>
    );
  }

  // Step 5: Thank You
  if (step === 5) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Thank you for spreading appreciation!</h2>
        <p className="mb-8 text-orange-500">Your message has been sent/downloaded. You just made someone&apos;s day brighter.</p>
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-orange-600 transition"
          onClick={() => {
            setStep(1);
            setName("");
            setMessage("");
            setTemplateIdx(null);
            setRecipientEmail("");
            setCopyMe(false);
            setUserEmail("");
            setDownloadUrl(null);
            setError("");
          }}
        >
          Recognize Someone Else
        </button>
      </section>
    );
  }
}
