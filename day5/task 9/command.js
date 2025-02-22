const fs = require('fs');

const [command, filename] = process.argv.slice(2);

if (command === 'create') fs.writeFileSync(filename, '') || console.log(`Created ${filename}`);
else if (command === 'delete') fs.unlinkSync(filename) || console.log(`Deleted ${filename}`);
else console.log('Use: node my-tool.js <create|delete> <filename>');
