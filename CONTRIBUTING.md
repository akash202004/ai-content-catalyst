# 🤝 Contributing to AI Content Catalyst

Welcome! We appreciate your interest in contributing to **AI Content Catalyst**. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) first.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+, npm, Git
- PostgreSQL database ([Neon](https://neon.tech/) recommended or Docker)

### Setup

1. **Fork & Clone**

   ```bash
   git clone https://github.com/your-username/ai-content-catalyst.git
   cd ai-content-catalyst
   git remote add upstream https://github.com/akash202004/ai-content-catalyst.git
   ```

2. **Install & Configure**

   ```bash
   npm install --legacy-peer-deps
   cp .env.example .env.local
   # Fill in your API keys in .env.local
   ```

3. **Database Setup** (Choose one)

   **Option A: Docker Compose (Easiest)**

   ```bash
   # Start PostgreSQL with Docker Compose
   docker-compose up -d

   # Update DATABASE_URL in .env.local
   DATABASE_URL=postgresql://postgres:password@localhost:5432/ai_content_catalyst
   ```

   **Option B: Docker Run**

   ```bash
   # Start PostgreSQL with Docker
   docker run --name ai-content-db \
     -e POSTGRES_PASSWORD=password \
     -e POSTGRES_DB=ai_content_catalyst \
     -p 5432:5432 \
     -d postgres:15

   # Update DATABASE_URL in .env.local
   DATABASE_URL=postgresql://postgres:password@localhost:5432/ai_content_catalyst
   ```

   **Option C: Neon (Cloud)**

   ```bash
   # Get connection string from https://neon.tech/
   DATABASE_URL=your_neon_connection_string
   ```

4. **Run Application**
   ```bash
   npm run db:push
   npm run dev
   ```

## 🔧 Making Changes

1. **Create Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes** following our [guidelines](#development-guidelines)

3. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):

   ```bash
   git commit -m "feat: add new template category"
   ```

   **Types:** `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

## 📝 Pull Request

### Before Submitting

```bash
# Update branch
git checkout main && git pull upstream main
git checkout your-branch && git rebase main

# Quality checks
npm run lint && npx tsc --noEmit && npm run build
npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}"
```

### PR Requirements

- [ ] Clear description & type (feat/fix/docs)
- [ ] Tested manually
- [ ] No TypeScript errors
- [ ] All CI checks pass
- [ ] Screenshots for UI changes

## 🐛 Issues

### Bug Reports

Include: description, steps to reproduce, expected vs actual behavior, environment details, screenshots

### Feature Requests

Include: clear description, use case, proposed solution, alternatives considered

## 📋 Guidelines

### Code Style

- **TypeScript** for all new code
- Follow **ESLint** rules, use **Prettier** formatting
- Meaningful names, comments for complex logic

### Structure

```
/app          # Next.js app directory
/controllers  # API route handlers
/db          # Database schema & connection
/utils       # Utility functions
```

### Components

- **Functional components** with hooks
- **Server components** when possible
- **TypeScript interfaces** for props

### APIs

- **Next.js API routes** with proper error handling
- **Input validation** with Zod
- **TypeScript types** for request/response

### Database

- **Drizzle ORM** for all operations
- Schema in `db/schema.ts`, use migrations

## 🧪 Testing

**Manual Testing:** Test core functionality (auth, content generation, templates, payments), edge cases (empty inputs, network errors), and cross-browser compatibility.

**Automated Testing:** Coming soon! For now, please test manually.

## 📞 Help & Recognition

- **Email:** akashlaha48@gmail.com
- **Issues:** GitHub issues for bugs/features
- **Recognition:** Contributors featured in README and release notes

---

**Thank you for contributing! 🚀**
