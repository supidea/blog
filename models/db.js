var mongoose=require('mongoose'),setting=require('../settings');
mongoose.connect(setting.db_host,setting.db_name);
module.exports=mongoose;