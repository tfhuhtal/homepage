const nextConfig = require('eslint-config-next')

module.exports = [
  ...nextConfig,
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
]
