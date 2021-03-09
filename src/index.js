const fastify = require('fastify')({
    logger: true
})

//bring in routes
const routes = require("./routes")

//db
const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost/fastify_crash')
.then(()=> console.log("Mongo is ready!!")).catch(err => console.log(err))

//routes
fastify.get('/', async(request,reply)=>{
    return {visiter: "xyz.in"}
})

routes.forEach((route,index)=>{
    fastify.route(route)
})


//starting server
const start = async () =>{
    try{
        await fastify.listen(3000)
        fastify.log.info(`Server is running at ${address}`)
    } catch(error){

    }
}

start()