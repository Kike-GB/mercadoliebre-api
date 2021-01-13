const {Product, Brand, Category} = require('../../database/mercadoliebre');
module.exports = {
latest (req, res) {
    Product.findall({
        order: ['createdAt', 'DESC'],
        limit: 8
    })
    .them ((data)=>{
        res.json([])
    })
}
}