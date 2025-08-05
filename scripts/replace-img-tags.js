const fs = require('fs');
const path = require('path');

const IMAGE_IMPORT = `import Image from 'next/image';`;

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

function replaceImgTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('<img')) return;

  if (!content.includes('next/image')) {
    content = IMAGE_IMPORT + '\n' + content;
  }

  content = content.replace(/<img\s+([^>]*?)\/?>/g, (match, attrs) => {
    let jsxAttrs = attrs
      .replace(/class=/g, 'className=')
      .replace(/([a-zA-Z]+)=["']?([^"'\s]+)["']?/g, (m, key, value) => {
        if (key === 'width' || key === 'height') {
          return `${key}={${value}}`;
        }
        return `${key}="${value}"`;
      });

    return `<Image ${jsxAttrs} />`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✔ Converted <img> → <Image /> in: ${filePath}`);
}

function run() {
  const srcDir = path.resolve(__dirname, '../src'); // usa solo src/
  if (!fs.existsSync(srcDir)) {
    console.error('❌ La cartella /src non esiste.');
    return;
  }

  const files = getAllFiles(srcDir);
  files.forEach(replaceImgTags);
  console.log('\n✅ Conversione completata!');
}

run();
