import express  from "express";
import {router as routerCarts } from './routes/carts.router.js'
import {router as routerProducts} from './routes/products.router.js'

import { homeString } from "./homestring.js";


const PUERTO = 8080
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//Routes : le decimos a la app de express que debe usar las rutas de los router
app.use('/',routerCarts) 
app.use('/',routerProducts)


app.get('/',(req,res)=>[
    res.send(homeString)
])



app.listen(PUERTO,()=>{
    console.log(`Escuchando en puerto ${PUERTO}`)
})