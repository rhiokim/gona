module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
    // sinon: true,
    // chai: true
  },
  globals: {
  },
  plugins: [
    'flowtype',
    'react'
  ],
  extends: [
    'standard',
    'standard-flow',
    'react-app'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  rules: {
    'object-property-newline': 'off'
  }
}
