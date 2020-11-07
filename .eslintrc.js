module.exports = {
  root: false,
  env: {
    node: false
  }, 
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
