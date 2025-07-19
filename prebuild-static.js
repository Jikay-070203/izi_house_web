const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, 'src', 'app', 'api');

if (fs.existsSync(apiPath)) {
  fs.rmSync(apiPath, { recursive: true, force: true });
  console.log('🧹 Removed API routes for static export.');
} else {
  console.log('✅ No API routes to remove.');
}
