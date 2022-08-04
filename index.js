const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

const url = "mongodb+srv://Shreyasa_Lankala:Shreyasa9@newcluster.jb0yv.mongodb.net/test";

/*mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
*/
/*const db = mongoose.connection;
db.on('error',()=>console.log("Error in connecting to Database"));
db.once('open',()=>console.log("connected to database"));
*/

/*const connection = async()=>{
    console.log(`connected to database`);
}
connection();
*/
const db = mongoose.connect(url);

const connect = async()=>{
    const con = await db
    console.log(con);
}
connect()

/*const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`);
});
*/

app.get("/",(req,res)=>{
    res.send("server");
}).listen(8080);