'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface
      .bulkInsert(
        'roles',
        [
          {
            name: 'Admin',
          },
          {
            name: 'User',
          },
        ],
        {},
      )
      .then(() =>
        queryInterface.bulkInsert('users', [
          {
            first_name: 'Bholder',
            last_name: 'Admin',
            email: 'bholder@bholder.com',
            password:
              '8cd92d4a172b89a5507bdac9a3b9054e23d78efcea64f82e6eca975eb171f744',
            created_at: new Date(),
            updated_at: new Date(),
            role_id: 1,
          },
        ]),
      );
  },

  down: queryInterface => {
    return queryInterface
      .bulkDelete('roles', null, {})
      .then(() => queryInterface.bulkDelete('users', null, {}));
  },
};
