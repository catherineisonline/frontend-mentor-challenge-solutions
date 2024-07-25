// inject-env.js
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const jsFilePath = path.join(__dirname, 'app.js'); // Path to your JS file
const envVariables = {
    BACKEND_URL: process.env.BACKEND_URL,
};

// Read the JavaScript file
let jsFileContent = fs.readFileSync(jsFilePath, 'utf-8');

// Replace placeholders with environment variables
Object.keys(envVariables).forEach(key => {
    const placeholder = `process.env.${key}`;
    const value = envVariables[key];
    jsFileContent = jsFileContent.replace(new RegExp(placeholder, 'g'), `"${value}"`);
});

// Write the modified content back to the JavaScript file
fs.writeFileSync(jsFilePath, jsFileContent, 'utf-8');
console.log('Environment variables have been injected into the JavaScript file.');
