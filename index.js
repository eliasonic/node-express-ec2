const express = require('express')

const app = express()

app.get('/', (req, res) => res.json('My API is working fine. #cicd workflow with Github Actions'))

app.listen(5000, () => console.log('Server started on port 5000'))