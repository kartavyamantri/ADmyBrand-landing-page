#!/bin/bash

echo "🚀 Setting up ADmyBRAND AI Suite..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "Please update Node.js to version 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please try again."
    exit 1
fi

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Environment variables for ADmyBRAND AI Suite
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
    echo "✅ .env.local created!"
fi

echo ""
echo "🎉 Setup complete! You can now run the development server:"
echo ""
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser."
echo ""
echo "📚 For more information, check the README.md file." 