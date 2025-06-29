"use client";
import { useState } from "react";
import Link from "next/link";
import { createRoot } from "react-dom/client";

const templates = [
  {
    id: 1,
    name: "Classic Orange",
    className: "rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
    render: (name: string, message: string) => (
      <div style={{ 
        backgroundColor: '#f97316', 
        color: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          marginBottom: '16px',
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}>Thank You, {name}!</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Elegant Border",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string) => (
      <div style={{ 
        border: '3px solid #f97316', 
        backgroundColor: '#ffffff',
        color: '#1f2937',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#f97316'
        }}>Appreciation for {name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontStyle: 'italic',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Minimalist Card",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string) => (
      <div style={{ 
        backgroundColor: '#ffffff', 
        border: '2px solid #e5e7eb', 
        color: '#374151',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <h2 style={{ 
          fontSize: '22px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#f97316'
        }}>{name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Bold Header",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string) => (
      <div style={{ 
        backgroundColor: '#ffedd5', 
        color: '#1f2937', 
        border: '2px solid #fed7aa',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '26px', 
          fontWeight: '800', 
          marginBottom: '16px',
          lineHeight: '1.2',
          color: '#ea580c',
          letterSpacing: '-0.02em'
        }}>{name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Modern Block",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl",
    render: (name: string, message: string) => (
      <div style={{ 
        background: 'linear-gradient(135deg, #fb923c, #ea580c)', 
        color: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
      }}>
        <h2 style={{ 
          fontSize: '26px', 
          fontWeight: '700', 
          marginBottom: '16px',
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}>{name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 6,
    name: "Professional Blue",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
    render: (name: string, message: string) => (
      <div style={{ 
        backgroundColor: '#3b82f6', 
        color: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.25)'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          letterSpacing: '-0.01em'
        }}>Recognition for {name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
      </div>
    ),
  },
  {
    id: 7,
    name: "Clean Green",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string) => (
      <div style={{ 
        backgroundColor: '#ffffff', 
        border: '3px solid #10b981', 
        color: '#1f2937',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px',
        minHeight: '200px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#10b981'
        }}>Thank You, {name}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px'
        }}>{message}</p>
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
      
      if (templateIdx === null) {
        throw new Error("No template selected");
      }
      
      // Create a temporary container for high-resolution rendering
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      tempDiv.style.width = '800px';
      tempDiv.style.height = '600px';
      tempDiv.style.overflow = 'hidden';
      document.body.appendChild(tempDiv);
      
      // Get the selected template
      const template = templates[templateIdx];
      
      // Create a high-resolution version of the template
      const templateStyle = template.render(name, message).props.style;
      const highResTemplate = (
        <div style={{
          ...templateStyle,
          width: '800px',
          height: '600px',
          padding: '48px',
          minWidth: '800px',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '32px',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: templateStyle.color || '#ffffff'
          }}>
            {name ? `Thank You, ${name}!` : 'Thank You!'}
          </h2>
          <p style={{
            fontSize: '32px',
            lineHeight: '1.6',
            fontWeight: '400',
            maxWidth: '700px',
            color: templateStyle.color || '#ffffff'
          }}>
            {message}
          </p>
        </div>
      );
      
      // Render the high-resolution template
      const root = createRoot(tempDiv);
      root.render(highResTemplate);
      
      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Capture the high-resolution image
      const canvas = await html2canvas(tempDiv, {
        allowTaint: true,
        useCORS: true,
        width: 800,
        height: 600,
        logging: false
      });
      
      const url = canvas.toDataURL("image/png", 1.0);
      setDownloadUrl(url);
      
      // Trigger download
      const link = document.createElement('a');
      link.download = `appreciation-for-${name}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      document.body.removeChild(tempDiv);
      
    } catch (error) {
      console.error('Download error:', error);
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
          <h1 className="text-heading mb-6 text-orange-600 max-w-2xl leading-tight">
            How did you feel when you were last recognized?
          </h1>
          <p className="text-body mb-8 max-w-xl text-orange-500 leading-relaxed">
            Recognizing others boosts morale, builds trust, and creates a positive culture. Start appreciating someone today!
          </p>
          <button
            className="btn-primary"
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
          <h2 className="text-heading mb-6 text-orange-600">Who are you recognizing?</h2>
          <div className="w-full max-w-md">
            <input
              className="form-input"
              placeholder="Enter their name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="flex gap-4 mt-8">
            <button
              className="btn-secondary"
              onClick={() => handleStepChange(0)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h2 className="text-heading mb-6 text-orange-600">What would you like to say?</h2>
          <div className="w-full max-w-md">
            <textarea
              className="form-input resize-none"
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
              className="btn-secondary"
              onClick={() => handleStepChange(1)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h2 className="text-heading mb-6 text-orange-600">Choose a template</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-4xl">
            {templates.map((tpl, idx) => (
              <div
                key={tpl.id}
                className={`template-option ${templateIdx === idx ? 'selected' : ''}`}
                onClick={() => setTemplateIdx(idx)}
              >
                <div 
                  id={templateIdx === idx ? "template-preview" : `template-${idx}`} 
                  style={{ width: "100%", height: 200 }}
                >
                  {tpl.render(name, message)}
                </div>
                <div className="text-subheading text-orange-600 p-2">{tpl.name}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              className="btn-secondary"
              onClick={() => handleStepChange(2)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h2 className="text-heading mb-6 text-orange-600">How would you like to share?</h2>
          
          {/* Preview Section */}
          {templateIdx !== null && (
            <div className="mb-8">
              <h3 className="text-subheading text-orange-600 mb-4">Preview (Final image will be high-resolution):</h3>
              <div className="flex justify-center">
                <div 
                  id="template-preview"
                  style={{ 
                    width: "400px", 
                    height: "300px",
                    transform: "scale(1)",
                    transformOrigin: "center"
                  }}
                  className="border-2 border-orange-200 rounded-lg overflow-hidden"
                >
                  {templates[templateIdx].render(name, message)}
                </div>
              </div>
            </div>
          )}
          
          <div className="w-full max-w-md space-y-4 mb-8">
            <input
              className="form-input"
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
                className="form-input"
                placeholder="Your email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                type="email"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSend}
              disabled={!recipientEmail || (copyMe && !userEmail) || sending}
            >
              {sending ? <LoadingSpinner message="Sending..." /> : "Send Email"}
            </button>
            <button
              className="btn-secondary"
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
                className="btn-primary"
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
              className="btn-secondary"
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
            <h2 className="text-heading mb-4 text-orange-600">Thank you for spreading appreciation!</h2>
            <p className="mb-8 text-body text-orange-500">Your message has been sent/downloaded. You just made someone&apos;s day brighter.</p>
          </div>
          <button
            className="btn-primary"
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
