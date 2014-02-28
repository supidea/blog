var mongodb=require('./db');
var Schema=mongodb.Schema;

var Tags=new Schema({
    tag_name:String,
    tag_url:String
})

exports.Tags=mongodb.model("tags",Tags);