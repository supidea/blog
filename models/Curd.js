var Article=require('./Article');
var Post=Article.Post;

//获取一篇文章
exports.readOnePost=function(req,res,queryStr){
    Post.findOne(queryStr,function(err,doc){
        res.render('article',{
            post_title:doc.post_title
        })
    })
}




//新建文章
exports.insertPost=function(req,res,data){
    var _Post=new Post(data);
    _Post.save()
}

