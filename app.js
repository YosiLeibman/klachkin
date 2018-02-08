const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html')
)
//server
app.listen(3000, () => console.log('Example app listening on port 3000!'))