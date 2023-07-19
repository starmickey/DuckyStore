const helper = require("../helpers/db");
const ProductDTO = require("./dto/ProductDTO");

const searchProductByName = async (query) => {
    let productDTOList = [];

    await helper.findAndPopulate(
        'product',
        { name: { $regex: query, $options: 'i' } },
        'price', 'price'

    ).then((products) => {
        products.forEach(product => {
            if (product != null && product != undefined) {
                productDTOList.push(new ProductDTO(product));
            }
        });
    });

    return productDTOList;
}

module.exports = {
    searchProductByName
}