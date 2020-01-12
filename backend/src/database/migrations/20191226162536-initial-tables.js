'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('roles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        }
      })
      .then(() => {
        return queryInterface
          .createTable('users', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            first_name: {
              type: Sequelize.STRING
            },
            last_name: {
              type: Sequelize.STRING
            },
            email: {
              type: Sequelize.STRING
            },
            password: {
              type: Sequelize.STRING
            },
            image: {
              type: Sequelize.STRING
            },
            created_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValueValue: new Date()
            },
            updated_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValueValue: new Date()
            },
            role_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'roles',
                key: 'id'
              }
            }
          })
          .then(() => {
            return queryInterface
              .createTable('posts', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                user_id: {
                  type: Sequelize.INTEGER,
                  references: {
                    model: 'users',
                    key: 'id'
                  }
                },
                title: {
                  type: Sequelize.STRING
                },
                thumbnail: {
                  type: Sequelize.STRING
                },
                content: {
                  type: Sequelize.STRING
                },
                categorie: {
                  type: Sequelize.STRING
                },
                meta: {
                  type: Sequelize.STRING
                },
                keywords: {
                  type: Sequelize.STRING
                },
                created_at: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: new Date()
                },
                updated_at: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: new Date()
                }
              })
              .then(() =>
                queryInterface.createTable('comments', {
                  id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                  },
                  post_id: {
                    type: Sequelize.INTEGER,
                    references: {
                      model: 'posts',
                      key: 'id'
                    }
                  },
                  user_id: {
                    type: Sequelize.INTEGER,
                    references: {
                      model: 'users',
                      key: 'id'
                    }
                  },
                  title: {
                    type: Sequelize.STRING
                  },
                  content: {
                    type: Sequelize.STRING
                  },
                  meta: {
                    type: Sequelize.STRING
                  },
                  created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: new Date()
                  },
                  updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: new Date()
                  }
                })
              );
          });
      }),
  down: queryInterface => {
    return queryInterface
      .dropTable('comments')
      .then(() => queryInterface.dropTable('posts'))
      .then(() => queryInterface.dropTable('users'))
      .then(() => queryInterface.dropTable('roles'));
  }
};
