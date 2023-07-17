const { getProducts } = require("../services/get-products");

const getClientCatalog = async (req, res) => {
    try {
        let start = req.start;
        let length = req.length;

        let response = await getProducts(start, length);
        return res.status(200).send({ status: 200, response });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    };

}

module.exports = { getClientCatalog };