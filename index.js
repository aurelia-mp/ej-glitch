const express = require('express')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () =>{

})

const mensaje = "<h1 style='color:blue'>Bienvenidos a servidor express</h1>"
app.get('/', (req, res)=>{
    res.send(mensaje)
})

let visitas = 0


app.get('/visitas', (req,res) => {
    visitas++
    res.send(`La cantidad de visitas es : ${visitas}`)
})

app.get('/fyh', (req,res)=>{
    const fecha = new Date()
    res.send(fecha.toLocaleString())
})

server.on('error', error => console.log(`Error en servidor: ${error}`))
