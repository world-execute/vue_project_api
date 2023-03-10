const express =require('express')
const distributionRouter = express.Router()
const checkId = require('../util/checkID')
const {isValidObjectId} = require("mongoose");
const joiExpress = require('@escook/express-joi')
const joiSchema = require('../validation')
const pagination = require('../util/pagination')
const {postDist, getDist, putDist, deleteDist} = require('../handler/distributionHandler')

distributionRouter.post('/',checkId('body','user_id'),postDist)
distributionRouter.get('/',pagination,getDist)
distributionRouter.put('/:id',checkId('params','id'),putDist)
distributionRouter.delete('/:id',checkId('params','id'),deleteDist)


module.exports = distributionRouter
