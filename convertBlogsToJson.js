import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogData } from './src/components/Blog/blogData.js'; // <-- add .js at the end

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, 'src/components/dynamic-blogs/blogs.json');

fs.writeFileSync(outputPath, JSON.stringify(blogData, null, 2), 'utf8');
console.log('blogs.json created!');
