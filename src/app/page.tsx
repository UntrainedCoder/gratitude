"use client";
import { useState } from "react";
import Link from "next/link";
import { createRoot } from "react-dom/client";

const templates = [
  {
    id: 1,
    name: "Classic Orange",
    className: "rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
    render: (name: string, message: string, senderName: string) => (
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
        textAlign: 'center',
        border: '3px solid #ea580c',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          marginBottom: '16px',
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}>Thank You, {name || 'Someone Special'}!</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your kindness and dedication make a difference every day.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '14px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '560px',
          lineHeight: '1.1',
          color: '#ffffff'
        }}>
          <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '12px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Elegant Border",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string, senderName: string) => (
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
        textAlign: 'center',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#f97316'
        }}>Appreciation for {name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontStyle: 'italic',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your contributions and positive energy are truly valued.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic',
          color: '#f97316'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Minimalist Card",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string, senderName: string) => (
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
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '22px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#f97316'
        }}>{name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Thank you for being amazing and making a positive impact.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic',
          color: '#f97316'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "Bold Header",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string, senderName: string) => (
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
        textAlign: 'center',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '26px', 
          fontWeight: '800', 
          marginBottom: '16px',
          lineHeight: '1.2',
          color: '#ea580c',
          letterSpacing: '-0.02em'
        }}>{name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your presence and contributions light up our world.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic',
          color: '#ea580c'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Modern Block",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl",
    render: (name: string, message: string, senderName: string) => (
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
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid #c2410c',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '26px', 
          fontWeight: '700', 
          marginBottom: '16px',
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}>{name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your dedication and positive spirit inspire us all.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Professional Blue",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
    render: (name: string, message: string, senderName: string) => (
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
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.25)',
        border: '3px solid #2563eb',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          letterSpacing: '-0.01em'
        }}>Recognition for {name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your excellence and commitment deserve recognition.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    name: "Clean Green",
    className: "rounded-xl p-6 flex flex-col items-center min-w-[300px] min-h-[180px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    render: (name: string, message: string, senderName: string) => (
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
        textAlign: 'center',
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          lineHeight: '1.3',
          color: '#10b981'
        }}>Thank You, {name || 'Someone Special'}</h2>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '12px'
        }}>{message || 'Your kindness and generosity make the world a better place.'}</p>
        <p style={{ 
          fontSize: '16px',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '280px',
          marginBottom: '20px',
          fontStyle: 'italic',
          color: '#10b981'
        }}>- {senderName || 'Someone who cares'}</p>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '7px',
          opacity: '0.8',
          textAlign: 'center',
          maxWidth: '280px',
          lineHeight: '1.1'
        }}>
          <div style={{ marginBottom: '1px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
          <div style={{ fontSize: '6px', opacity: '0.7' }}>
            If it touched your heart, pass it on to two special people 🌟💖
          </div>
        </div>
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
  const [senderName, setSenderName] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [templateIdx, setTemplateIdx] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  // For image download
  const handleDownload = async () => {
    setError("");
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
      

      
      // Create a high-resolution version of the template based on template ID
      let highResTemplate;
      
      if (templateIdx === 0) { // Classic Orange
        highResTemplate = (
          <div style={{
            backgroundColor: '#f97316',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            border: '6px solid #ea580c',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '32px',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              {name ? `Thank You, ${name}!` : 'Thank You, Someone Special!'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              {message || 'Your kindness and dedication make a difference every day.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#ffffff'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 1) { // Elegant Border
        highResTemplate = (
          <div style={{
            border: '6px solid #f97316',
            backgroundColor: '#ffffff',
            color: '#1f2937',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '600',
              marginBottom: '32px',
              lineHeight: '1.3',
              color: '#f97316'
            }}>
              Appreciation for {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontStyle: 'italic',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              {message || 'Your contributions and positive energy are truly valued.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#f97316',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#1f2937'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 2) { // Minimalist Card
        highResTemplate = (
          <div style={{
            backgroundColor: '#ffffff',
            border: '4px solid #e5e7eb',
            color: '#374151',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.05)',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '44px',
              fontWeight: '600',
              marginBottom: '32px',
              lineHeight: '1.3',
              color: '#f97316'
            }}>
              {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#374151',
              marginBottom: '24px'
            }}>
              {message || 'Thank you for being amazing and making a positive impact.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#f97316',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#374151'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 3) { // Bold Header
        highResTemplate = (
          <div style={{
            backgroundColor: '#ffedd5',
            color: '#1f2937',
            border: '4px solid #fed7aa',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '800',
              marginBottom: '32px',
              lineHeight: '1.2',
              color: '#ea580c',
              letterSpacing: '-0.02em'
            }}>
              {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              {message || 'Your presence and contributions light up our world.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ea580c',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#1f2937'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 4) { // Modern Block
        highResTemplate = (
          <div style={{
            background: 'linear-gradient(135deg, #fb923c, #ea580c)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.15)',
            border: '6px solid #c2410c',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '700',
              marginBottom: '32px',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              {message || 'Your dedication and positive spirit inspire us all.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#ffffff'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 5) { // Professional Blue
        highResTemplate = (
          <div style={{
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(59, 130, 246, 0.25)',
            border: '6px solid #2563eb',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '600',
              marginBottom: '32px',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
              color: '#ffffff'
            }}>
              Recognition for {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              {message || 'Your excellence and commitment deserve recognition.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#ffffff',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#ffffff'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      } else if (templateIdx === 6) { // Clean Green
        highResTemplate = (
          <div style={{
            backgroundColor: '#ffffff',
            border: '6px solid #10b981',
            color: '#1f2937',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '800px',
            height: '600px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '600',
              marginBottom: '32px',
              lineHeight: '1.3',
              color: '#10b981'
            }}>
              Thank You, {name || 'Someone Special'}
            </h2>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              {message || 'Your kindness and generosity make the world a better place.'}
            </p>
            <p style={{
              fontSize: '32px',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '700px',
              color: '#10b981',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              - {senderName || 'Someone who cares'}
            </p>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              opacity: '0.8',
              textAlign: 'center',
              maxWidth: '560px',
              lineHeight: '1.1',
              color: '#1f2937'
            }}>
              <div style={{ marginBottom: '2px' }}>Sent from Gratitude.TechPremi.com to brighten your day!</div>
              <div style={{ fontSize: '12px', opacity: '0.7' }}>
                If it touched your heart, pass it on to two special people 🌟💖
              </div>
            </div>
          </div>
        );
      }
      
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
      
      // Trigger download
      const link = document.createElement('a');
      link.download = `appreciation-for-${name}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      document.body.removeChild(tempDiv);
      
      // Go to thank you step
      handleStepChange(5);
      
    } catch (error) {
      console.error('Download error:', error);
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Hero Section
  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-300 rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <section className="flex flex-col items-center justify-center flex-1 text-center py-12 px-4 sm:py-24 animate-in relative z-10">
          {/* Hero Illustration */}
          <div className="mb-8 relative">
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Main Heart Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <svg className="w-6 h-6 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <svg className="w-5 h-5 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-orange-600 font-bold leading-tight">
              <span className="block">Spread Joy &</span>
              <span className="block gradient-text">Appreciation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-orange-500 leading-relaxed">
              Create beautiful, personalized appreciation cards that brighten someone&apos;s day and strengthen relationships.
            </p>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-orange-600">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Beautiful Templates</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Easy Sharing</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">From the Heart</span>
              </div>
            </div>
            
            <button
              className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => handleStepChange(1)}
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Start Creating Appreciation</span>
              </span>
            </button>
          </div>
        </section>
        
        <footer className="w-full text-center py-6 border-t border-orange-100 mt-auto bg-white/80 backdrop-blur-sm relative z-10 px-4">
          <span className="text-orange-500">Powered by </span>
          <Link href="https://techpremi.com" className="text-orange-600 font-bold hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">TechPremi.com</Link>
        </footer>
      </div>
    );
  }

  // Step 1: Sender Name
  if (step === 1) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={1} totalSteps={5} />
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 animate-in">
          <h2 className="text-heading mb-6 text-orange-600">What&apos;s your name?</h2>
          <div className="w-full max-w-md">
            <input
              className="form-input"
              placeholder="Enter your name"
              value={senderName}
              onChange={e => setSenderName(e.target.value)}
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
              disabled={!senderName.trim()}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 2: Recipient Name
  if (step === 2) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={2} totalSteps={5} />
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
              onClick={() => handleStepChange(1)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStepChange(3)}
              disabled={!name.trim()}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 3: Message
  if (step === 3) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={3} totalSteps={5} />
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
              onClick={() => handleStepChange(2)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStepChange(4)}
              disabled={!message.trim()}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 4: Template Selection
  if (step === 4) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={4} totalSteps={5} />
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
                  {tpl.render(name, message, senderName)}
                </div>
                <div className="text-subheading text-orange-600 p-2">{tpl.name}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              className="btn-secondary"
              onClick={() => handleStepChange(3)}
            >
              Back
            </button>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStepChange(5)}
              disabled={templateIdx === null}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Step 5: Email/Download
  if (step === 5) {
    return (
      <div className="min-h-screen bg-white">
        <ProgressIndicator currentStep={5} totalSteps={5} />
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
                  {templates[templateIdx].render(name, message, senderName)}
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-primary"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? <LoadingSpinner message="Generating..." /> : "Download as Image"}
            </button>
          </div>

          {error && (
            <div className="text-red-500 mt-4 p-3 bg-red-50 rounded-lg border border-red-200 slide-in-from-bottom-4">
              {error}
            </div>
          )}
          <div className="mt-8">
            <button
              className="btn-secondary"
              onClick={() => handleStepChange(4)}
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
              setSenderName("");
              setName("");
              setMessage("");
              setTemplateIdx(null);
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
