import fs from 'fs';
import path from 'path';

const replacements = [
    { regex: /#FF6A0C/gi, replace: '#3b82f6' },
    { regex: /255,106,12/g, replace: '59,130,246' },

    { regex: /#818cf8/gi, replace: '#a855f7' },
    { regex: /129,140,248/g, replace: '168,85,247' },

    { regex: /#34d399/gi, replace: '#14b8a6' },
    { regex: /52,211,153/g, replace: '20,184,166' },

    { regex: /#f87171/gi, replace: '#fb7185' },
    { regex: /248,113,113/g, replace: '251,113,133' },
];

function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (let entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            for (let repl of replacements) {
                content = content.replace(repl.regex, repl.replace);
            }
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir('d:/restaurant-sample/admin');
