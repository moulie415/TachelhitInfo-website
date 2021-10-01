module.exports = {
  "extends": [
    "eslint:recommended",
    "prettier",
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "babel",
    "react",
    "prettier",
    '@typescript-eslint',
  ],
  "settings": {
    "react": {
      "pragma": "h",
      "version": "preact"
    }
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
    'import/extensions': 'off',
    'jsx-a11y/media-has-caption': 'off',
    "no-console": 1,
    "no-empty": 0,
    "semi": 2,
    "keyword-spacing": 2,
    "require-atomic-updates": 0,
    "react/no-string-refs": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    '@typescript-eslint/ban-ts-ignore': 'off',
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }]
  }
}