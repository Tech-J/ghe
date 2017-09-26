const express = require('express')
const bdParser = require('body-parser')
const cors = require('cors')
const port = process.env.port || 8080
const app = express()

app.listen(port,()=>{console.log("running")})
