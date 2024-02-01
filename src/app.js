import path from 'path';
import express  from "express";
import cors from "cors"
import bodyParser from 'body-parser'
import {router as routerCarts } from './routes/carts.router.js'
import {router as routerProducts} from './routes/products.router.js'


const PUERTO = 8080
const app = express()

//Middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//Routes : le decimos a la app de express que debe usar las rutas de los router
app.use('/',routerCarts) 
app.use('/',routerProducts)
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Especifica el dominio de tu aplicación web
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Especifica los métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


app.get('/',(req,res)=>{
    const htmlPath = path.join(process.cwd(), 'public', 'welcome.html');
    res.sendFile(htmlPath);
    

})

app.get('/test',(req,res)=>{
   
    const htmlPath = path.join(process.cwd(), 'public', 'mytest.html');
    res.sendFile(htmlPath);
})



app.listen(PUERTO,()=>{
    console.log(`Escuchando en puerto ${PUERTO}`)
})