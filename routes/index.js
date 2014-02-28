/*
 * GET home page.
 */
var Post=require('../models/Article');
module.exports=function(app){
    app.get('/',function(req,res){
        res.render('index',{
            title:"我的博客"
        })
    })

    app.get('/install',function(req,res){
//        插入数据
        var _Post=Post.Post;
        var _article=new _Post({
            post_title:'标题一',
            post_content:"a啊是打发打发打发"
        });
        var _Types=Post.Type;
        var article_type=new _Types({
            type_name:"日记"
        })
        article_type.save();
        _article.save();
        res.send('数据库安装成功');
    });

}
