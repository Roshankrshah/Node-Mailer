const express = require("express");
const app = express();

PORT = process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send("Hello Peter");
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
});