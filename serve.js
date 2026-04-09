const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const filePath = path.join(__dirname, 'UI_LIBRARY_PRESENTATION.html');

const server = http.createServer((req, res) => {
  // SECURITY: Add HTTP Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  // SECURITY: Input validation - prevent directory traversal
  const sanitizedUrl = path.normalize(req.url);
  if (sanitizedUrl.includes('..') || sanitizedUrl.includes('//')) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('<h1>400 - Bad Request</h1>');
    return;
  }

  if (req.url === '/' || req.url === '/UI_LIBRARY_PRESENTATION.html') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - File not found</h1>');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Not found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}/`);
  console.log(`✓ Press Ctrl+C to stop`);
});
