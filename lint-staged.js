module.exports = {
  '*.{ts,tsx}': ['eslint --max-warnings=0', () => 'tsc-files --noEmit'],
  '*.spec.{ts,tsx}': ['npm run test'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
