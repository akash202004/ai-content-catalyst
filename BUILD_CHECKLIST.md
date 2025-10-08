# 🏗️ Build Checklist

Quick verification checklist for AI Content Catalyst deployment.

## ✅ Pre-Build

- [ ] Node.js 18+ installed
- [ ] Dependencies installed: `npm install --legacy-peer-deps`
- [ ] `.env.local` exists with all required variables
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] ESLint passes: `npm run lint`

## 🏗️ Build

```bash
npm run build
```

- [ ] Build completes without errors
- [ ] `.next/` directory created
- [ ] No build warnings

## 🚀 Verify

```bash
npm start
# Open http://localhost:3000
```

- [ ] App starts successfully
- [ ] All pages load
- [ ] No console errors
- [ ] Auth & database work

## 🔧 Quick Fixes

**Common Issues:**

- **Module not found**: `npm install --legacy-peer-deps`
- **Type errors**: Fix TypeScript issues
- **Environment errors**: Check `.env.local`
- **Build cache**: `rm -rf .next node_modules && npm install --legacy-peer-deps`

**Success Output:**

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
```
