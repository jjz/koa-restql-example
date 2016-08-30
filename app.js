'use strict';
const koa = require('koa');

const prepare = require('./prepare');
const RestQL = require('koa-restql');

const models = prepare.sequelize.models;
const app = koa();
const restql = new RestQL(models);
var routers = restql.routes();


app.use(routers);
app.listen('3000', '127.0.0.1');

