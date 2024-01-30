import express from 'express'


const router = express.Router()
const users=[]

router.get('/api/users',(req,res)=>{
    res.json(users)
    
})

router.post('/api/users',(req,res)=>{

    /* 
    Crea un nuevo carrito 
      const myCart = {id:0,products:[]}

    */

    const nuevoUsuario = req.body
    users.push(nuevoUsuario)
    res.send('Creacion de usuario OK!')
})

export {router}