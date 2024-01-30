
import express from 'express'

export const router = express.Router()
const pets=[]

router.get('/api/mascotas',(req,res)=>{
    res.json(pets)
})

router.post('/api/mascotas',(req,res)=>{
      const nuevaMascota = req.body
      pets.push(nuevaMascota)
      res.send('Creacion de mascota OK !')
})

