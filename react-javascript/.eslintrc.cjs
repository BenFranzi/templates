module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    '@bengineer.dev/react'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": "off",
    "padding-line-between-statements": "off"
  },
  overrides: [
    {
      files: ["vite.config.ts"],
      rules: {
        "import/no-nodejs-modules": "off"
      }
    }
  ]
}
