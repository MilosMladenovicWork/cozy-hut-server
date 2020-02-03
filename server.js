const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname , 'public')))

app.post('/contact', (req, res) => {
  res.status(200).send('Hey')
})

app.listen(4000, () => console.log('listening'))