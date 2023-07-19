class ProductDTO {
    constructor(product) {
        this.name = String(product.name);
        this.description = String(product.description);
        this.stock = Number(product.stock);
        this.status = String(product.status);
        this.createdDate = Date(product.created_date);
        this.price = Number(product.price.price);
    }
}

module.exports = ProductDTO;