// this module is used to delete all files in the build folder except index.html
// since the parcel buildcommand doesnt do so automatically.

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

// Read all files in the build directory
const buildFiles = fs.readdirSync(buildDir);

// Filter out the index.html file
const filesToDelete = buildFiles.filter((file) => file !== 'index.html');

// Delete the non-referenced files
filesToDelete.forEach((file) => {
  fs.unlinkSync(path.join(buildDir, file));
});