@echo off

:: Navigate and clean
cd android
call ./gradlew clean

:: Navigate back
cd ..

:: bundle command
call npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

:: Navigate to the android directory and run the assembleDebug command
cd android
call ./gradlew assembleDebug

:: Navigate back
cd ..

:: Open the app in File Explorer
start "" "android\app\build\outputs\apk\debug"