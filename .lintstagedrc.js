module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --cache . --fix"],
  "**/*.{md,json,yaml}": ["prettier --write"],
};
