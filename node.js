const app = require('http').
    createServer((req,res) => {
        res.sendDate('Hello')
    });
const DATABASE_URL = process.env.DATABASE_URDATABASE_UR ;
app.listen(3000, ()=> {
    console.log(`Server is listen on port ${DATABASE_URL}`);
    // console.log(process.env)
})