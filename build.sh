#!/bin/bash

echo "🚀 Building Grover Podcast..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Production files are in the 'dist' folder"
    echo ""
    echo "To serve the production build:"
    echo "  npm run serve"
    echo ""
    echo "To view the development version:"
    echo "  npm run dev"
else
    echo "❌ Build failed!"
    exit 1
fi
