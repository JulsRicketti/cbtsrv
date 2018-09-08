const { associateCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');

const before = {
  all: [],
  find: [
    restrictToOwner({ idField: '_id' })
  ],
  get: [
    restrictToOwner({ idField: '_id' })
  ],
  create: [
    associateCurrentUser({ idField: '_id', as: 'userId' })
  ],
  update: [
    restrictToOwner({ idField: '_id' })
  ],
  patch: [
    restrictToOwner({ idField: '_id' })
  ],
  remove: [
    restrictToOwner({ idField: '_id' })
  ]
};

const after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

module.exports = {
  before,
  after
};
