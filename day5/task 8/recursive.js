const fs = require('fs');
const path = require('path');

function traverse(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        console.log(fullPath);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        }
    });
}

traverse(process.argv[2] || '.');
