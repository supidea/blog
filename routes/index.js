/*
 * GET home page.
 */
var Post=require('../models/Article');
var Curd=require('../models/Curd')
module.exports=function(app){

    app.get('/',function(req,res){
        Curd.readAllPost(req,res,{},'index')
    });

    app.get('/install',function(req,res){
        Curd.insertPost(req,res,{
            post_title:'xxxx2345',
            post_content:"a啊是打dddddddddd发打发打发dd"
        })
        res.send('数据库安装成功');
    });



}
