module.exports = {
  '*.{ts,tsx}': [
    'eslint --max-warnings=0',
    'npm run test',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
