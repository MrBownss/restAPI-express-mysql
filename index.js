// api (application programming interface) = interface menghubungkan satu aplikasi ke apikasi lainnya => perantara antar berbagai aplikasi berbeda, baik dalam satu platform maupun lintas platform


const express = require("express")
const app = express()
const PORT = 3000
const routerProduct = require("./app/product/router.js")
const logger = require("morgan")

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1', routerProduct);
app.use((req, res, next) => {
    res.send({
        status: "Failed",
        message: "Resource" + req.originalUrl
        + "Not found"
    })
})


app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`))