import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const HF_API_TOKEN = process.env.HF_API_TOKEN;
    
    // Enhanced debug logging
    console.log("=== ENVIRONMENT DEBUG ===");
    console.log("HF_API_TOKEN:", HF_API_TOKEN ? "Present" : "Missing");
    console.log("Token length:", HF_API_TOKEN?.length || 0);
    console.log("All env vars with 'HF':", Object.keys(process.env).filter(key => key.includes('HF')));
    console.log("All env vars:", Object.keys(process.env).slice(0, 10)); // First 10 env vars
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("=========================");
    
    if (!HF_API_TOKEN) {
      // Fallback to simple enhancement if no API token
      console.log("No API token found, using simple enhancement");
      const enhancedMessage = enhanceMessageSimple(message);
      return NextResponse.json({ enhancedMessage });
    }

    // Step 1: Paraphrase using T5 Paraphrase model
    const paraphrased = await paraphraseMessage(message, HF_API_TOKEN);
    if (!paraphrased) {
      const enhancedMessage = enhanceMessageSimple(message);
      return NextResponse.json({ enhancedMessage });
    }

    // Step 2: Grammar correction
    const corrected = await grammarCorrectMessage(paraphrased, HF_API_TOKEN);
    if (!corrected) {
      const enhancedMessage = enhanceMessageSimple(paraphrased);
      return NextResponse.json({ enhancedMessage });
    }

    // Final cleanup
    const cleaned = cleanUpMessage(corrected);
    return NextResponse.json({ enhancedMessage: cleaned });
  } catch (error) {
    console.error("Error enhancing message:", error);
    const { message } = await req.json();
    const enhancedMessage = enhanceMessageSimple(message);
    return NextResponse.json({ enhancedMessage });
  }
}

// Step 1: Paraphrase using T5 Paraphrase model
async function paraphraseMessage(message: string, token: string): Promise<string | null> {
  const HF_API_URL = "https://api-inference.huggingface.co/models/Vamsi/T5_Paraphrase_Paws";
  const prompt = `paraphrase: ${message} </s>`;
  try {
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    });
    if (!response.ok) return null;
    const data = await response.json();
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }
    return null;
  } catch {
    return null;
  }
}

// Step 2: Grammar correction using prithivida/grammar_error_correcter_v1
async function grammarCorrectMessage(message: string, token: string): Promise<string | null> {
  const HF_API_URL = "https://api-inference.huggingface.co/models/prithivida/grammar_error_correcter_v1";
  try {
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: message }),
    });
    if (!response.ok) return null;
    const data = await response.json();
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }
    return null;
  } catch {
    return null;
  }
}

// Clean up function for enhanced messages
function cleanUpMessage(message: string): string {
  let cleaned = message.replace(/\s+/g, ' ').trim();
  cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  if (cleaned.endsWith(',') || cleaned.endsWith(';')) {
    cleaned = cleaned.slice(0, -1) + '.';
  }
  return cleaned.trim();
}

// Smart fallback enhancement
function enhanceMessageSimple(originalMessage: string): string {
  let cleanMessage = originalMessage.trim();
  const fillerWords = ['just', 'really', 'very', 'so much', 'a lot'];
  for (const filler of fillerWords) {
    cleanMessage = cleanMessage.replace(new RegExp(`\\b${filler}\\b`, 'gi'), '');
  }
  const hasLove = /love|heart|care|special|amazing|wonderful/i.test(cleanMessage);
  const hasThanks = /thanks|thank|grateful|appreciate/i.test(cleanMessage);
  const hasHelp = /help|support|assist|guide/i.test(cleanMessage);
  let enhancedMessage = '';
  if (hasLove) {
    enhancedMessage = `My heart overflows with love and gratitude for ${cleanMessage.toLowerCase()}. You bring such joy and warmth to my life, and I'm so blessed to have you! 💖✨`;
  } else if (hasThanks) {
    enhancedMessage = `I'm incredibly grateful and touched by ${cleanMessage.toLowerCase()}. Your kindness means the world to me, and I'm so thankful for you! 🙏💕`;
  } else if (hasHelp) {
    enhancedMessage = `I'm so deeply thankful for ${cleanMessage.toLowerCase()}. Your support and guidance have made such a difference in my life, and I'm forever grateful! 🌟💝`;
  } else {
    const prefixes = [
      "I'm absolutely overjoyed and grateful for",
      "My heart is overflowing with gratitude for",
      "I can't express how much happiness you bring me with",
      "You make my world so much brighter with"
    ];
    const endings = [
      "and it fills my heart with pure joy and gratitude! 💖",
      "and you make my life so much more beautiful and meaningful! ✨",
      "and I'm so blessed to have someone as wonderful as you in my life! 🌟",
      "and your kindness touches my soul in the most beautiful way! 💝"
    ];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
    enhancedMessage = `${randomPrefix} ${cleanMessage.toLowerCase()} ${randomEnding}`;
  }
  return enhancedMessage;
} 