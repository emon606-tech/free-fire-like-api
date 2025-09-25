#!/usr/bin/env node

// Simple startup script to ensure we run from the correct directory
const path = require('path');
const { spawn } = require('child_process');

// Change to the directory containing this script (root directory)
process.chdir(__dirname);

// Start the main application
const app = spawn('node', ['app.js'], {
  stdio: 'inherit',
  env: process.env
});

app.on('close', (code) => {
  process.exit(code);
});
