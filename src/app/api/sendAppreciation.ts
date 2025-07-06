import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const templates = [
  (name: string, message: string, senderName: string) => `
    <div style="background:#ff9800;color:#fff;padding:32px;border-radius:16px;font-family:sans-serif;min-width:300px;min-height:180px;position:relative;">
      <h2 style="font-size:2rem;font-weight:bold;margin-bottom:8px;">Thank You, ${name}!</h2>
      <p style="font-size:1.2rem;margin-bottom:12px;">${message}</p>
      <p style="font-size:1.2rem;margin-bottom:20px;font-style:italic;">- ${senderName || 'Someone who cares'}</p>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;opacity:0.8;text-align:center;width:100%;">
        <div style="margin-bottom:2px;">Sent from Gratitude.TechPremi.com to brighten your day!</div>
        <div style="font-size:10px;opacity:0.7;">If it touched your heart, pass it on to two special people 🌟💖</div>
      </div>
    </div>
  `,
  (name: string, message: string, senderName: string) => `
    <div style="border:2px solid #ff9800;color:#ff9800;padding:32px;border-radius:16px;font-family:sans-serif;min-width:300px;min-height:180px;position:relative;">
      <h2 style="font-size:2rem;font-weight:600;margin-bottom:8px;">Appreciation for ${name}</h2>
      <p style="font-style:italic;margin-bottom:12px;">${message}</p>
      <p style="font-size:1.2rem;margin-bottom:20px;font-style:italic;color:#ff9800;">- ${senderName || 'Someone who cares'}</p>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;opacity:0.8;text-align:center;width:100%;">
        <div style="margin-bottom:2px;">Sent from Gratitude.TechPremi.com to brighten your day!</div>
        <div style="font-size:10px;opacity:0.7;">If it touched your heart, pass it on to two special people 🌟💖</div>
      </div>
    </div>
  `,
  (name: string, message: string, senderName: string) => `
    <div style="background:#fff;border:1px solid #ffcc80;color:#ff9800;padding:32px;border-radius:16px;font-family:sans-serif;min-width:300px;min-height:180px;position:relative;">
      <h2 style="font-size:1.5rem;font-weight:500;margin-bottom:8px;">${name}</h2>
      <p style="font-size:1rem;margin-bottom:12px;">${message}</p>
      <p style="font-size:1rem;margin-bottom:20px;font-style:italic;color:#ff9800;">- ${senderName || 'Someone who cares'}</p>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;opacity:0.8;text-align:center;width:100%;">
        <div style="margin-bottom:2px;">Sent from Gratitude.TechPremi.com to brighten your day!</div>
        <div style="font-size:10px;opacity:0.7;">If it touched your heart, pass it on to two special people 🌟💖</div>
      </div>
    </div>
  `,
  (name: string, message: string, senderName: string) => `
    <div style="background:#fff3e0;color:#ef6c00;padding:32px;border-radius:16px;font-family:sans-serif;min-width:300px;min-height:180px;border:2px solid #ffb74d;position:relative;">
      <h2 style="font-size:2rem;font-weight:800;margin-bottom:8px;">${name}</h2>
      <p style="font-size:1.2rem;font-weight:300;margin-bottom:12px;">${message}</p>
      <p style="font-size:1.2rem;margin-bottom:20px;font-style:italic;color:#ef6c00;">- ${senderName || 'Someone who cares'}</p>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;opacity:0.8;text-align:center;width:100%;">
        <div style="margin-bottom:2px;">Sent from Gratitude.TechPremi.com to brighten your day!</div>
        <div style="font-size:10px;opacity:0.7;">If it touched your heart, pass it on to two special people 🌟💖</div>
      </div>
    </div>
  `,
  (name: string, message: string, senderName: string) => `
    <div style="background:linear-gradient(135deg,#ffb74d,#ff9800);color:#fff;padding:32px;border-radius:16px;font-family:sans-serif;min-width:300px;min-height:180px;position:relative;">
      <h2 style="font-size:2rem;font-weight:bold;margin-bottom:8px;">${name}</h2>
      <p style="font-size:1rem;margin-bottom:12px;">${message}</p>
      <p style="font-size:1rem;margin-bottom:20px;font-style:italic;">- ${senderName || 'Someone who cares'}</p>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;opacity:0.8;text-align:center;width:100%;">
        <div style="margin-bottom:2px;">Sent from Gratitude.TechPremi.com to brighten your day!</div>
        <div style="font-size:10px;opacity:0.7;">If it touched your heart, pass it on to two special people 🌟💖</div>
      </div>
    </div>
  `,
];

export async function POST(req: NextRequest) {
  const { senderName, name, message, templateIdx, recipientEmail, copyMe, userEmail } = await req.json();
  if (!senderName || !name || !message || templateIdx == null || !recipientEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Configure your SMTP transport here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = templates[templateIdx](name, message, senderName);
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: recipientEmail,
    subject: `You've been recognized by ${senderName}!`,
    html,
    ...(copyMe && userEmail ? { cc: userEmail } : {}),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 