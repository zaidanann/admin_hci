@echo off
REM Quick start script untuk PPKPT Admin Panel di Windows

echo 🚀 SATGAS PPKPT Admin Panel - Quick Start
echo ==========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo ✅ Dependencies installed
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🎯 Starting development server...
echo.
echo Available URLs:
echo   🏠 Home:        http://localhost:3000
echo   🎛️  Admin:       http://localhost:3000/admin
echo   👥 Organisasi:  http://localhost:3000/admin/organisasi
echo   📄 Publikasi:   http://localhost:3000/admin/publikasi
echo.
echo 💡 Tips:
echo   - Press Ctrl+C to stop server
echo   - Press F5 to reload page
echo   - Open DevTools: F12
echo   - Use console utilities: resetAllData(), exportData(), showStats()
echo.
echo 📚 Documentation:
echo   - README_PPKPT.md - Project overview
echo   - ADMIN_GUIDE.md - Technical documentation
echo   - USER_GUIDE.md - User guide
echo   - FEATURES_CHECKLIST.md - Features list
echo.
echo ==========================================
echo.

call npm run dev
pause
