'use strict';

const Sequelize = require('sequelize');
const config = require("./config");
const debug = require('debug')('sequelize');

const sequelize = new Sequelize(config.db, {
    logging: debug,
    underscored: true,
    underscoredAll: true,
    define: {
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        schemaDelimiter: '_',
        createAt: 'created_at',
        updateAt: 'update_at',
        deletedAt: 'deleted_at'
    }
});

module.exports = {
    sequelize,
};