const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello');
})

app.listen(process.env.PORT, () => {
   console.log('Running on', process.env.PORT)
})