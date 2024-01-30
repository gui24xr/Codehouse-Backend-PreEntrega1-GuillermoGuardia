import express from 'express'
import { cartsManager } from '../controllers/carts-manager.js'

//Manejo de los recursos de mi servidor
const PATHFILECARTS = './cartsfile.json'
const myCartsManager = new cartsManager(PATHFILECARTS)

//Testing //4 carros
myCartsManager.createCart()
myCartsManager.createCart()
myCartsManager.createCart()
myCartsManager.createCart()

myCartsManager.addProductInCart(1,24,24)
myCartsManager.addProductInCart(1,24,24)
myCartsManager.addProductInCart(2,12,2)
myCartsManager.addProductInCart(2,24,1)
myCartsManager.addProductInCart(3,2,1)
myCartsManager.addProductInCart(3,3,1)
myCartsManager.addProductInCart(3,2,1)
console.log('cart: ',myCartsManager.getProducsFromCart(1))
console.log('cart: ',myCartsManager.getProducsFromCart(2))
console.log('cart: ',myCartsManager.getProducsFromCart(3))
//console.log('cart: ',myCartsManager.getProducsFromCart(4))

//Creo mi instancia de objeto Router
export const router = express.Router()

router.get('/api/carts/:cid',(req,res)=>{
   const {cid} = req.params
    //Pido el carro al manager y como se que devuelve undefined si no lo encuentra.
    if (myCartsManager.existCart(cid)){
        const products = myCartsManager.getProducsFromCart(cid)
        res.json(products)
    }
    else{
        res.send(`No existe el carro id ${cid}`)
    }
        
   

})

router.post('/api/carts',(req,res)=>{
    //Obtengo la response del cliente con lo cual creare el carrito
    const clientRequestBody = req.body
    //console.log('Recibido: ',clientRequestBody)
    myCartsManager.createCart()
    res.send('Se ah creado un carrito !')
})

router.post('/api/carts/:cid/products/:pid',(req,res)=>{

})
