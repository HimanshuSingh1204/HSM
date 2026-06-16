@echo off
REM HSMS Housing Society Management System - Startup Script
REM This script starts both the frontend (Vite) and backend (Socket.IO) servers

echo.
echo ============================================
echo   HSMS - Housing Society Management System
echo   Startup Script
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [!] Dependencies not installed
    echo [*] Installing dependencies...
    call pnpm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
)

echo [OK] Dependencies installed
echo.

REM Start the Socket.IO server in background
echo [*] Starting Real-time Server (Socket.IO) on port 3001...
start "HSMS Server" cmd /k "npm run dev:server"

REM Wait a moment for server to start
timeout /t 2 /nobreak

REM Start the frontend dev server
echo [*] Starting Frontend Dev Server (Vite) on port 5173...
echo.
echo ============================================
echo   STARTUP COMPLETE
echo ============================================
echo.
echo Frontend:  http://localhost:5173
echo Backend:   http://localhost:3001
echo.
echo Demo Credentials:
echo   Email: rajesh@society.com
echo   Password: demo@123
echo.
echo [!] Two terminals will open:
echo   1. Socket.IO Server (Backend)
echo   2. Vite Dev Server (Frontend)
echo.
echo Keep both terminals open while developing
echo Close this window to exit
echo.
echo ============================================
echo.

npm run dev
