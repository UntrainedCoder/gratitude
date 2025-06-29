"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const templates = [
  {
    id: 1,
    name: "Classic Orange",
    className:
      "bg-orange-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
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
      "border-2 border-orange-500 text-orange-600 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
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
      "bg-white border border-orange-200 text-orange-500 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
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
      "bg-orange-100 text-orange-700 rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] border-2 border-orange-300 transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
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
      "bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl",
    render: (name: string, message: string) => (
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-base">{message}</p>
      </div>
    ),
  },
];

// Progress indicator component
const ProgressIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-orange-100">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-orange-600">Step {currentStep}</span>
          <span className="text-sm text-orange-400">of {totalSteps}</span>
        </div>
        <div className="w-24 h-2 bg-orange-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// Loading spinner component
const LoadingSpinner = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      <p className="text-orange-600 font-medium">{message}</p>
    </div>
  );
};

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
  const [isDownloading, setIsDownloading] = useState(false);

  // Animation states
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    // Simple entrance animation for all steps
    setAnimateIn(true);
    const timer = setTimeout(() => setAnimateIn(false), 300);
    return () => clearTimeout(timer);
  }, [step]);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  // For image download
  const handleDownload = async () => {
    setError("");
    setDownloadUrl(null);
    setIsDownloading(true);
    
    try {
      const html2canvas = (await import("html2canvas")).default;
      const el = document.getElementById("template-preview");
      if (!el) return;
      const canvas = await html2canvas(el);
      const url = canvas.toDataURL("image/png");
      setDownloadUrl(url);
    } catch {
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
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
      handleStepChange(5);
    } catch {
      setError("Failed to send email. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // Hero Section
  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-orange-700">
        <section className="flex flex-col items-center justify-center flex-1 text-center py-12 px-4 sm:py-24 animate-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-orange-600 max-w-2xl leading-tight">
            How did you feel when you were last recognized?
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl text-orange-500 leading-relaxed">
            Recognizing others boosts morale, builds trust, and creates a positive culture. Start appreciating someone today!
          </p>
          <button
            className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
            onClick={() => handleStepChange(1)}
          >
            Start Appreciating
          </button>
        </section>
        <footer className="w-full text-center py-4 sm:py-6 border-t border-orange-100 mt-auto bg-white px-4">
          <span className="text-orange-500">Powered by </span>
          <Link href="https://techpremi.com" className="text-orange-600 font-bold hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">TechPremi.com</Link>
        </footer>
      </div>
    );
  }

  // Step 1: Name
  if (step === 1) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={1} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600">Who are you recognizing?</h2>
          <div className="w-full max-w-md">
            <input
              className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200 placeholder-orange-400"
              placeholder="Enter their name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="flex gap-4 mt-8">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={() => handleStepChange(0)}
            >
              Back
            </button>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={() => handleStepChange(2)}
              disabled={!name.trim()}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 2: Message
  if (step === 2) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={2} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600">What would you like to say?</h2>
          <div className="w-full max-w-md">
            <textarea
              className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200 placeholder-orange-400 resize-none"
              placeholder="Write your appreciation message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              autoFocus
              rows={4}
            />
            <div className="text-right mt-2 text-sm text-orange-500">
              {message.length}/500 characters
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={() => handleStepChange(1)}
            >
              Back
            </button>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={() => handleStepChange(3)}
              disabled={!message.trim()}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 3: Template Selection
  if (step === 3) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={3} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600">Choose a template</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-4xl">
            {templates.map((tpl, idx) => (
              <div
                key={tpl.id}
                className={`cursor-pointer border-2 transition-all duration-300 rounded-lg overflow-hidden ${templateIdx === idx ? "border-orange-600 scale-105 shadow-xl" : "border-transparent hover:border-orange-300"}`}
                onClick={() => setTemplateIdx(idx)}
              >
                <div id={templateIdx === idx ? "template-preview" : undefined} className={tpl.className} style={{ width: "100%", height: 200 }}>
                  {tpl.render(name, message)}
                </div>
                <div className="mt-2 text-sm font-medium text-orange-700 p-2">{tpl.name}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={() => handleStepChange(2)}
            >
              Back
            </button>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={() => handleStepChange(4)}
              disabled={templateIdx === null}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 4: Email/Download
  if (step === 4) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={4} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-600">How would you like to share?</h2>
          <div className="w-full max-w-md space-y-4 mb-8">
            <input
              className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200 placeholder-orange-400"
              placeholder="Recipient's email"
              value={recipientEmail}
              onChange={e => setRecipientEmail(e.target.value)}
              type="email"
            />
            <label className="flex items-center gap-3 text-orange-700 cursor-pointer hover:text-orange-600 transition-colors duration-200">
              <input
                type="checkbox"
                checked={copyMe}
                onChange={e => setCopyMe(e.target.checked)}
                className="w-4 h-4 text-orange-600 border-orange-300 rounded focus:ring-orange-500"
              />
              Copy me on this email
            </label>
            {copyMe && (
              <input
                className="w-full border-2 border-orange-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200 placeholder-orange-400"
                placeholder="Your email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                type="email"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={handleSend}
              disabled={!recipientEmail || (copyMe && !userEmail) || sending}
            >
              {sending ? <LoadingSpinner message="Sending..." /> : "Send Email"}
            </button>
            <button
              className="bg-white border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? <LoadingSpinner message="Generating..." /> : "Download as Image"}
            </button>
          </div>
          {downloadUrl && (
            <div className="mt-6 flex flex-col items-center slide-in-from-bottom-4">
              <a
                href={downloadUrl}
                download={`appreciation-for-${name}.png`}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Click to Download
              </a>
            </div>
          )}
          {error && (
            <div className="text-red-500 mt-4 p-3 bg-red-50 rounded-lg border border-red-200 slide-in-from-bottom-4">
              {error}
            </div>
          )}
          <div className="mt-8">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={() => handleStepChange(3)}
            >
              Back
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 5: Thank You
  if (step === 5) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={5} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-600">Thank you for spreading appreciation!</h2>
            <p className="mb-8 text-orange-500 text-lg">Your message has been sent/downloaded. You just made someone&apos;s day brighter.</p>
          </div>
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
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
      </div>
    );
  }
}
