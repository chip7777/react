module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    extends: ['plugin:prettier/recommended', 'prettier'],
    env: {
      browser: true,
    },
    rules: {
      'linebreak-style': 0,
      'max-len': ['error', { code: 120, ignoreStrings: true }],
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
  
      'import/prefer-default-export': 'off',
  
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/media-has-caption': 'off',
  
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js', '.jsx'],
        },
      ],
  
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
  
      'prettier/prettier': 1,
    },
    overrides: [
      {
        files: ['*.test.js', '*.spec.js'],
        env: {
          jest: true,
          mocha: true,
        },
      },
    ],
  };
  