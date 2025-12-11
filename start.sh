#!/bin/bash

# Script untuk quick start PPKPT Admin Panel

echo "🚀 SATGAS PPKPT Admin Panel - Quick Start"
echo "=========================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎯 Starting development server..."
echo ""
echo "Available URLs:"
echo "  🏠 Home:        http://localhost:3000"
echo "  🎛️  Admin:       http://localhost:3000/admin"
echo "  👥 Organisasi:  http://localhost:3000/admin/organisasi"
echo "  📄 Publikasi:   http://localhost:3000/admin/publikasi"
echo ""
echo "💡 Tips:"
echo "  - Press Ctrl+C to stop server"
echo "  - Press Ctrl+R to reload page"
echo "  - Open DevTools: F12"
echo "  - Use console utilities: resetAllData(), exportData(), showStats()"
echo ""
echo "📚 Documentation:"
echo "  - README_PPKPT.md - Project overview"
echo "  - ADMIN_GUIDE.md - Technical documentation"
echo "  - USER_GUIDE.md - User guide"
echo "  - FEATURES_CHECKLIST.md - Features list"
echo ""
echo "=========================================="
echo ""

npm run dev
