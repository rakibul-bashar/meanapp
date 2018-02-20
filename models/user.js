var mongoose =require('mongoose');
var Schema =mongoose.Schema;
var Message = require('./message');
var mongooseUniqueValidator=require('mongoose-unique-validator');
var schema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    messages:[{type: Schema.Types.ObjectId,ref:'Message'}]
});

schema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.__v;
    return obj
};
schema.plugin(mongooseUniqueValidator);



module.exports=mongoose.model('User',schema);
