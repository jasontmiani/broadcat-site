module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  "extends": ["airbnb"],
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": [
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "jsx-a11y/anchor-is-valid": "error"
  ],
  "env": {
    "browser": true
  }
}
