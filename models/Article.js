var mongodb=require('./db');
var Schema=mongodb.schema;

var Commnets=new Schema({
    author:String,
    data:Data,
    content:String
})

var ArticleSchema=new Schema({
    title:String,//文章标题
    author:{type:String,default:"乱甩网"},//文章作者
    content:String,//文章内容
    data:Data,
    comments:[Commnets]
})