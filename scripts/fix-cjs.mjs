import { writeFileSync } from 'fs';
writeFileSync('dist/cjs/package.json', JSON.stringify({ type: 'commonjs' }, null, 2));