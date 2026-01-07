#!/bin/bash

echo "🔧 Setting up VistaDocs Next.js after fixes..."
echo ""

# Remove old dependencies and build artifacts
echo "📦 Removing old node_modules and build artifacts..."
rm -rf node_modules
rm -rf .next
rm -f package-lock.json

echo ""
echo "📥 Installing dependencies with Tailwind v3..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
