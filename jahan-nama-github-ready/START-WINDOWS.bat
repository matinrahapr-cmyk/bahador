@echo off
cd /d "%~dp0"
echo Jahan Nama Storefront
echo.
if not exist node_modules (
  echo Installing packages...
  call npm.cmd install
)
echo Starting: http://localhost:3000
call npm.cmd run dev
pause
