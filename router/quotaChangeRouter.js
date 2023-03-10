const express =require('express')
const quotaChangeRouter = express.Router()
const joiExpress = require('@escook/express-joi')
const joiSchema = require('../validation')
const {postQuota, getQuota, deleteQuota,putQuota} = require("../handler/quotaChangeHandler");
const checkID = require('../util/checkID')
const pagination = require('../util/pagination')

quotaChangeRouter.post('/',joiExpress(joiSchema.createQuota),
    postQuota)
quotaChangeRouter.get('/',pagination,
    checkID('query','user_id'),getQuota)
quotaChangeRouter.put('/:id',checkID('params','id'),
    checkID('body','employee_id'),putQuota)
quotaChangeRouter.delete('/:id',checkID('params','id'),deleteQuota)

module.exports = quotaChangeRouter
