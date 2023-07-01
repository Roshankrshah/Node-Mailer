const express = require("express");
const appRoute = require('./routes/route.js');

const app = express();
PORT = process.env.PORT || 3001;


app.use(express.json());
app.use('/api',appRoute)

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
});