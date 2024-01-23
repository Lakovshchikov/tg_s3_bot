module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.cjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/promise-function-async": 0
  }
};
