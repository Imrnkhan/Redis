const {createClient}= require("redis");

const client= createClient({url:"redis://localhost:6379"});


client.on('error', (error) => {
    console.log(error);

// client.on_connect("error", function (err){
//     console.log({message:err.message});
});


module.exports= client;