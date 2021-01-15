const {Product, Brand, Category} = require('../database/models');

module.exports = {
    latest: (req, res, next) => {
        Product.findAll({
            order: [['createdAt', 'DESC']],
            limit: 5
        })
        .then ((data)=>{
            res.json({
                meta: {
                    status: 200,
                    count: data.length,
                    url: "api/products/latest"
                },
                data: data
            })
        })
        .catch (errors => {
            console.log(errors)
            res.send ({})
        })
    },
    offers: (req, res, next) => {
        Product.findAll({
            order: [['discount', 'DESC']],
            limit: 5
        })
        .then ((data)=>{
            res.json({
                meta: {
                    status: 200,
                    count:data.length,
                    url: "api/products/offers"
                },
                data: data
            })
        })
        .catch (errors => {
            console.log(errors)
            res.send ({})
        })

    }
}