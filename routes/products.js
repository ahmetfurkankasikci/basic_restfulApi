const express = require('express');
const Product = require('../models/Product')
const router = express.Router();

router.get('/', (req, res) => {
    Product.find().then((products) => {
        res.json(products);

    })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id).then((products) => {
        res.json(products);

    })

})

router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body?.description,
        createdAt: req.body?.createdat
    })
    product.save()
    res.json(product)
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        price: req.body.price,
        description: req.body?.description,
        createdAt: req.body?.createdat

    }).then((product) => {
        res.json(product)
    })

})

router.delete('/:id', (req, res) => {

    Product.findByIdAnDelete(req.params.id)
        .then((product) => {
            res.json(product)
        })

})

module.exports = router;