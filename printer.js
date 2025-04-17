import * as fs from "fs"

const directoryPath = 'C:/Users/JAK.VISUALS/Downloads/members'; // Replace with the actual path

try {
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    console.log(file);
  });
} catch (err) {
  console.error('Unable to read directory:', err);
}