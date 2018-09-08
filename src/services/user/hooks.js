const { restrictToOwner } = require('feathers-authentication-hooks');
const { disallow } = require('feathers-hooks-common');

const before = {
  all: [],
  find: [
    restrictToOwner({ idField: '_id' })
  ],
  get: [
    restrictToOwner({ idField: '_id' })
  ],
  create: [
    disallow('external')
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
