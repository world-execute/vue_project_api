const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quota_changesSchema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    reason:{
        type: String,
        required: true,
    },
    is_accept:{
        type:Boolean,
        default:false
    },
    create_time:{
        type:Date,
        default: Date.now
    }

},{versionKey:false})
// 导出模型名 quota_changesModule
// 数据库中集合名 quota_changes
// 数据库约束 quota_changesSchema
module.exports = quota_changesModule = mongoose.model('quota_changes',quota_changesSchema)
