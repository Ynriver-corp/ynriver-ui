//import eslintConfigPrettier from "eslint-config-prettier";

module.exports = {
  root: true,
  /*
  env: { es2021: true, browser: true, node: true },
  parserOptions: {
    //project: ["./tsconfig.json"],
    ecmaVersion: "2021",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  */
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint","prettier", "react", "react-hooks"],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": "warn",
    comments: { "min-spaces-from-content": 1 }, // Use 1 space after comment to work with Prettier.
    //"@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [ "node_modules/", "node_modules","dist"],
  //...eslintConfigPrettier,
};
