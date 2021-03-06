module.exports = {
  name: 'Account',
  properties: {
    id: {
      type: 'string',
      required: true,
      id: true,
    },
    customerNumber: {
      type: 'string',
      required: true,
    },
    balance: {
      type: 'number',
      required: true,
    },
    branch: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
    },
    avgBalance: {
      type: 'number',
      required: true,
    },
    minimumBalance: {
      type: 'number',
      required: true,
    },
  },
};
