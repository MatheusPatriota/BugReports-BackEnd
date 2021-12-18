import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.send('API ONLINE')
})

// http://localhost:3000
app.listen(3000, () =>{
  console.log('server is running')
})