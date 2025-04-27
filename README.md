# 🚀 AI Content Catalyst

An AI-powered content generation platform built with **Next.js**, **TypeScript**, **Drizzle ORM**, and **PostgreSQL**.  
Generate blog titles, Instagram hashtags, YouTube descriptions, and much more with ease!

## ✨ Features

- 🔥 AI-powered content generation (powered by Gemini API)
- 🔒 Secure authentication (Clerk)
- 💳 Stripe-powered subscription plans (Free, Premium, Ultimate)
- 🧠 35+ pre-built content templates
- 📜 History tracking system
- 📈 Advanced analytics dashboard (coming soon)
- ⚡ Blazing fast database access with Drizzle ORM and Neon Postgres
- 🧩 Beautiful and responsive UI (built with TailwindCSS and Next.js)
- 🔎 Search functionality for faster access

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, TypeScript, TailwindCSS
- **Backend:** Next.js App Router, API routes
- **Database:** Neon Postgres (via Drizzle ORM)
- **Authentication:** Clerk
- **Payments:** Stripe
- **AI Model:** Gemini API

## 🧩 Folder Structure

```
/app
  /(auth)  
  /(context)  
  /(data)  
  /dashboard
    /_components
    /billing
    /content
    /history
    /settings
/components
/lib
/utils
/public
```

## ⚙️ Environment Variables

Create a `.env.local` file at the root of your project and add:

```env
Follow .env.example
```

## 🧪 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/akash202004/ai-content-catalyst.git
cd ai-content-catalyst
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables**

Fill in the `.env.local` file with your keys.

4. **Run the development server**

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) and start generating content!

## 📈 Future Enhancements

- [ ] Full analytics dashboard (track usage, top templates, etc.)
- [ ] Content sharing & export options (PDF, DOCX)
- [ ] More template categories
- [ ] AI tone and style customization
- [ ] Admin panel to manage templates and users

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo and open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

# 🔥 Made with ❤️ by Akash Laha

