// express er en node-pakke, som gør det nemt at lave en webserver. Vi bruger den til at lave API
const express = require("express");

//we are initializing the express framework and sving it into another constant, vi navngiver den 4000
const app = express();

const PORT = process.env.PORT||3000; 


const loginController = require('./Controller/logincontroller');
const { Server } = require("http");


Server.post('/login, loginController'); 


//undersøger om porten kører
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


