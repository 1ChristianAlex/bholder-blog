"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createSchema("users").then(() => {
      return queryInterface
        .createTable(
          "users",
          {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            firstName: {
              type: Sequelize.STRING
            },
            lastName: {
              type: Sequelize.STRING
            },
            email: {
              type: Sequelize.STRING
            },
            password: {
              type: Sequelize.STRING
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              default: new Date()
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              default: new Date()
            }
          },
          { schema: "users" }
        )
        .then(() => {
          return queryInterface.createSchema("posts").then(() => {
            queryInterface
              .createTable(
                "posts",
                {
                  id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                  },
                  user_id: {
                    type: Sequelize.INTEGER
                  },
                  title: {
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
                  createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    default: new Date()
                  },
                  updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    default: new Date()
                  }
                },
                { schema: "posts" }
              )
              .then(() => {
                return queryInterface.alterTable("posts.posts", {
                  user_id: {
                    references: {
                      model: "users.users",
                      key: "id"
                    }
                  }
                });
              });
          });
        });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
