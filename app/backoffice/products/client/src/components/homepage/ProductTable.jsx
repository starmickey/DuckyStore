import React from "react";
import Table from 'react-bootstrap/Table';

function ProductTable(params) {
    console.log(params);
    const catalog = params.products;

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {catalog.map((product) => (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable;