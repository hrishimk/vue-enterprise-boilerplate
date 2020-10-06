const _ = require('lodash')

module.exports = [{
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      const fileName = _.kebabCase(value)
      if (fileName.indexOf('-') === -1) {
        return 'Component names should contain at least two words to avoid conflicts with existing and future HTML elements.'
      }
      return true
    },
  },
  {
    type: 'select',
    name: 'componentType',
    message: 'Component type: ',
    initial: ['cabs', 'base'],
    choices: [{
        name: 'base',
        message: 'Base Component',
      },
      {
        name: 'cabs',
        message: 'Cabs component',
      },
    ],
    validate(value) {
      return true
    },
  },
]
