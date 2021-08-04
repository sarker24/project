module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-prototype-builtins': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:prettier/recommended' // Needs to be last entry
      ],
      plugins: ['@typescript-eslint', 'react'],
      settings: {
        react: {
          version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off', //  throws warnings from react lifecycle methods
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
        ]
      }
    }
  ]
};
