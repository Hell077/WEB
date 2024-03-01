const { default: mongoose } = require("mongoose");
 function connectionbd(){
  mongoose.connect(
    'mongodb://localhost:27017/login',{
    
    }
  )
  mongoose.connection.on('connected',()=>{
   console.log('все хорошо')
  })
  mongoose.connection.on('error',(err)=>{
    console.log(`все не хорошо ${err}`)
   })
 }
 module.exports = {connectionbd}