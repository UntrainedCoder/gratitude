This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## AI Message Enhancement

This app includes an AI-powered message enhancement feature that can make your appreciation messages more heartfelt and detailed.

### Setup (Optional)

To enable AI enhancement:

1. Sign up for a free account at [Hugging Face](https://huggingface.co)
2. Go to Settings → Access Tokens
3. Create a new token (starts with `hf_`)
4. Create a `.env.local` file in the project root
5. Add your token: `HF_API_TOKEN=your_token_here`

### How it Works

- Check the "✨ Enhance message with AI" checkbox when writing your message
- The app will automatically enhance your message using AI
- If no API token is provided, it uses simple text enhancement
- Enhanced messages are more detailed and heartfelt while keeping your original meaning

### Features

- **Free tier**: 30,000 requests per month
- **Fallback**: Works without API token using simple enhancement
- **Privacy**: No user data stored, completely anonymous
- **Real-time**: See enhancement status and preview
