const { searchProductByName } = require('../services/search-product');

const searchProduct = async (req, res) => {
    try {
        let response = await searchProductByName(req.query.q);
        return res.status(200).send({ status: 200, response });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    };

}

module.exports = { searchProduct };