var mongodb=require('./db');
var Schema=mongodb.Schema;

var Commnets=new Schema({
    comments_author:String,
    comments_data:Date,
    comments_content:String
})

var Tag=new Schema({
    tag_name:String,
    tag_url:String
})

var Type=new Schema({
    type_name:String
})

var Post=new Schema({
    post_title:String,//文章标题
    post_url:String,//文章链接
    post_type:[Type],//文章类别
    post_author:{type:String,default:"komla"},//文章作者
    post_content:String,//文章内容
    post_date:{type:Date,default:Date.now()},//发布时间
    post_comments:[Commnets],//文章评论
    post_tags:[Tag],//文章标签
    post_views:Number//文章浏览量
})

exports.Post=mongodb.model("posts",Post);
exports.Type=mongodb.model("types",Type);