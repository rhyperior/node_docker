const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Hi there !! First time \_( -_- )_/")
})


const port = process.env.PORT || 3000 ;

app.listen(port, () => console.log(`listening to port ${port}`))
