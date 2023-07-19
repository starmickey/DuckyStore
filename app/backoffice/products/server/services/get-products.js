const helper = require("../helpers/db");
const ProductDTO = require("./dto/ProductDTO");

const getProducts = async (start, length) => {
  let productDTOList = [];

  await helper.findPopulateSortAndLimit('product', {}, 'price', 'price', 'name', start, length).then((products) => {
    products.forEach(product => {
      productDTOList.push(new ProductDTO(product));
    });
  });

  return productDTOList;
}

module.exports = {
  getProducts
}