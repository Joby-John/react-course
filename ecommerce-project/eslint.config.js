import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React JSX rules (THIS catches `class`)
      ...react.configs.recommended.rules,

      // Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Project preferences
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Vite / Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Explicitly enforce JSX attribute correctness
      'react/no-unknown-property': 'error',

       // Modern JSX transform (React 17+)
      'react/react-in-jsx-scope': 'off',
    },
  },
]
