module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export":"off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
      "global-require": "off",
      "react-native/no-raw-text": "off",
      "no-param-reassign": "off",
      "no-underscore-dangle": "off",
      camelcase: "off",
      "no-console": ["error", { allow: ["tron"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off"
    },
    settings: {
      "import/resolver": {
        "babel-plugin-root-import": {
          rootPathSuffix: "src"
        }
      }
    }
};
