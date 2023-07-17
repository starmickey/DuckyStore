const helper = require("../helpers/db");

const getProducts = async (start, length) => {
  let productDTOList = [];

  await helper.findPopulateSortAndLimit('product', {}, 'price', 'price', 'name', start, length).then((products) => {
    products.forEach(product => {
      productDTOList.push({
        name: String(product.name),
        description: String(product.description),
        stock: Number(product.stock),
        status: String(product.status),
        createdDate: Date(product.created_date),
        price: Number(product.price.price)
      });
    });
  });

  return productDTOList;
}

module.exports = {
  getProducts
}