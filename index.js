const express = require('express');
const server = express(); //create express app
const port = 8080;

server.use(express.static(__dirname+'/public'));//tells app where to find files

//tells server what to listen for
server.get('/counter2',(req,resp)=>{
   resp.sendFile('/public/html/index.html',{root:__dirname});
});

//gets server up and listening
server.listen(port,()=>{
  console.log('now listening on port', port);
});
