const router_product = require("express").Router();

const connection = require("../../config/mysql.js")
const productController = require('./controller.js')

// localhost:3000
router_product.get('/product', productController.index)

router_product.get('/product/:id', productController.detail);

// localhost:3000/category/...(id number)
router_product.get('/category/:id', (req, res) => {
    const {id} = req.params

    const findbyID = list_category.find((category) => {
        return category.id === parseInt(id)
    })

    if (findbyID) {
        res.status(200).send({
            massage: "Succes",
            data: findbyID
        })
    } else {
        res.status(404).send({
            massage: "Data not found"
        })
    }

});

router_product.post('/category/', (req, res) => {
    const body = req.body

    res.status(200).send(body)
    // res.json(req.body)
});

module.exports = router_product;