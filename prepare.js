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

var User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,},


    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: ''
    },
    nickname: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: ''
    },

    deleted_at: {
        type: Sequelize.DATE,
        allowNull: false,
        /**
         * if this type is DATE,
         * defaultValue must be a Date,
         * otherwise paranoid is useless
         */
        defaultValue: new Date(0)
    }
});
User.sync();


module.exports = {
    sequelize,
};