# 🎨 Tailwind CSS v4 + Next.js Setup Guide

## ⚠️ **CRITICAL: Use this guide to prevent common Tailwind CSS setup errors**

This guide ensures proper Tailwind CSS v4 configuration with Next.js and prevents the most common setup issues.

---

## 📋 **Quick Setup Checklist**

### ✅ **1. Dependencies (package.json)**
```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    // ... other dependencies
  }
}
```

### ✅ **2. PostCSS Configuration (postcss.config.mjs)**
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### ✅ **3. CSS Import (app/globals.css)**
```css
@import "tailwindcss";

/* Your custom styles here */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  color: var(--foreground);
  background: var(--background);
}
```

### ✅ **4. Layout Integration (app/layout.tsx)**
```typescript
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 🚨 **Common Errors & Solutions**

### **Error 1: "PostCSS plugin has moved to a separate package"**
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
```

**❌ Wrong PostCSS Config:**
```javascript
// DON'T DO THIS
module.exports = {
  plugins: {
    tailwindcss: {},  // ❌ v3 syntax with v4 packages
    autoprefixer: {},
  },
}
```

**✅ Correct PostCSS Config:**
```javascript
// DO THIS
const config = {
  plugins: ["@tailwindcss/postcss"],  // ✅ v4 syntax
};
export default config;
```

### **Error 2: Missing @tailwindcss/postcss Package**
**Fix:** Install the correct package
```bash
npm install @tailwindcss/postcss tailwindcss --save-dev
```

### **Error 3: Wrong CSS Import Syntax**
**❌ Wrong (v3 syntax):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**✅ Correct (v4 syntax):**
```css
@import "tailwindcss";
```

### **Error 4: Mixing Tailwind Versions**
**❌ Don't mix v3 and v4:**
```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",           // ❌ v3
    "@tailwindcss/postcss": "^4",      // ❌ v4
  }
}
```

**✅ Use consistent v4:**
```json
{
  "devDependencies": {
    "tailwindcss": "^4",               // ✅ v4
    "@tailwindcss/postcss": "^4",      // ✅ v4
  }
}
```

---

## 🔧 **Step-by-Step Setup Process**

### **Step 1: Clean Installation**
```bash
# Remove old packages if they exist
npm uninstall tailwindcss @tailwindcss/postcss autoprefixer

# Install correct Tailwind CSS v4 packages
npm install tailwindcss@^4 @tailwindcss/postcss@^4 --save-dev
```

### **Step 2: Create/Update Configuration Files**

**postcss.config.mjs:**
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

**app/globals.css:**
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
}
```

### **Step 3: Remove Conflicting Files**
```bash
# Remove old Tailwind config if it exists
rm tailwind.config.js tailwind.config.ts
```
> **Note:** Tailwind CSS v4 is zero-config, so no config file is needed!

### **Step 4: Test Installation**
Create a test page with obvious Tailwind classes:

**app/page.tsx:**
```typescript
export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 Tailwind Works!
        </h1>
        <p className="text-gray-600 mb-6">
          If you see styling, everything is working correctly.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Test Button
        </button>
      </div>
    </div>
  );
}
```

---

## 🧪 **Verification Commands**

### **1. Check Dependencies**
```bash
npm ls tailwindcss @tailwindcss/postcss
```
**Expected output:**
```
├── @tailwindcss/postcss@4.x.x
└── tailwindcss@4.x.x
```

### **2. Test Server**
```bash
npm run dev
```
**Expected:** No PostCSS errors, server starts successfully

### **3. Verify Classes in HTML**
```bash
curl -s http://localhost:3000 | grep -o 'bg-gradient\|text-4xl\|rounded-2xl'
```
**Expected:** Classes should appear in the output

### **4. Visual Test**
- Open http://localhost:3000
- You should see:
  - Gradient background ✅
  - Styled white card ✅
  - Proper typography ✅
  - Hover effects ✅

---

## 🔍 **Debugging Checklist**

When Tailwind isn't working, check these in order:

### **Dependencies ✅**
- [ ] `tailwindcss: "^4"` in package.json devDependencies
- [ ] `@tailwindcss/postcss: "^4"` in package.json devDependencies
- [ ] No conflicting v3 packages
- [ ] Run `npm install` after changes

### **Configuration Files ✅**
- [ ] `postcss.config.mjs` exists with correct plugin
- [ ] `@import "tailwindcss";` in globals.css (not @tailwind directives)
- [ ] No `tailwind.config.js` file (v4 is zero-config)
- [ ] globals.css imported in layout.tsx

### **Server Status ✅**
- [ ] Development server starts without errors
- [ ] No PostCSS plugin errors in console
- [ ] HTTP 200 responses (not 500 errors)

### **HTML Output ✅**
- [ ] Tailwind classes present in rendered HTML
- [ ] CSS classes not being stripped out
- [ ] Styles actually applied in browser

---

## 🚀 **Advanced Configuration**

### **Adding Custom Fonts (e.g., Satoshi)**
```typescript
// app/layout.tsx
import localFont from "next/font/local";

const customFont = localFont({
  src: "./fonts/CustomFont-Variable.ttf",
  variable: "--font-custom",
  weight: "300 900",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### **Custom CSS Variables**
```css
/* app/globals.css */
@import "tailwindcss";

:root {
  --color-brand: #3b82f6;
  --color-accent: #8b5cf6;
  --font-custom: var(--font-custom-variable);
}

body {
  font-family: var(--font-custom), system-ui, sans-serif;
}
```

---

## 📚 **Key Differences: v3 vs v4**

| Feature | Tailwind v3 | Tailwind v4 |
|---------|-------------|-------------|
| **Config File** | Required `tailwind.config.js` | Zero-config (optional) |
| **CSS Import** | `@tailwind base;` directives | `@import "tailwindcss";` |
| **PostCSS Plugin** | `tailwindcss: {}` | `"@tailwindcss/postcss"` |
| **Package** | `tailwindcss` only | `tailwindcss` + `@tailwindcss/postcss` |

---

## 🆘 **Emergency Reset**

If everything is broken, use this nuclear option:

```bash
# 1. Remove all Tailwind packages
npm uninstall tailwindcss @tailwindcss/postcss autoprefixer

# 2. Remove config files
rm tailwind.config.js tailwind.config.ts postcss.config.js postcss.config.mjs

# 3. Clean install
npm install

# 4. Reinstall Tailwind v4
npm install tailwindcss@^4 @tailwindcss/postcss@^4 --save-dev

# 5. Create fresh postcss.config.mjs
echo 'const config = { plugins: ["@tailwindcss/postcss"] }; export default config;' > postcss.config.mjs

# 6. Update globals.css
echo '@import "tailwindcss";' > app/globals.css

# 7. Restart server
npm run dev
```

---

## 🎯 **Success Indicators**

You know everything is working when:

1. **No errors** in terminal when running `npm run dev`
2. **HTTP 200** responses (not 500 errors)
3. **Tailwind classes** visible in browser inspector
4. **Visual styling** matches your classes
5. **Hot reload** works with class changes

---

## 📝 **Notes for Cursor AI Agents**

When helping with Tailwind setup:

1. **Always check the Tailwind version first** - v3 and v4 have different syntax
2. **Verify PostCSS configuration** - this is the most common error source
3. **Check for conflicting packages** - mixing versions causes issues
4. **Use the test page template** provided above to verify setup
5. **Follow this guide step-by-step** rather than making assumptions

---

**Last Updated:** July 2025  
**Tailwind CSS Version:** v4.x  
**Next.js Version:** 15.x  

> Save this file and reference it whenever setting up Tailwind CSS with Next.js to avoid common configuration pitfalls! 