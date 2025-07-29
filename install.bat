@echo off
echo 🚀 Setting up ADmyBRAND AI Suite...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies. Please try again.
    pause
    exit /b 1
)

REM Create .env.local file if it doesn't exist
if not exist .env.local (
    echo 📝 Creating .env.local file...
    (
        echo # Environment variables for ADmyBRAND AI Suite
        echo NEXT_PUBLIC_APP_URL=http://localhost:3000
    ) > .env.local
    echo ✅ .env.local created!
)

echo.
echo 🎉 Setup complete! You can now run the development server:
echo.
echo    npm run dev
echo.
echo Then open http://localhost:3000 in your browser.
echo.
echo 📚 For more information, check the README.md file.
pause 