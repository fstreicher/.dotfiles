import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
    },
  },
  {
    ignores: [
      'eslint.config.mjs',
      '**/*spec.ts',
    ],
  },
  {
    rules: {
      'function-paren-newline': [
        'warn',
        'consistent'
      ],
      'no-warning-comments': 'warn',
      'object-shorthand': 'warn',

      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'generic',
        }
      ],

      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',

      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        }
      ],

      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
        }
      ],

      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-optional-chain': 'warn',
    }
  }
);
