import React from 'react';
import Product from './Product';

const Products = ({products, togglePurchased, removeProduct, changeProduct}) => {
    return (
        <div className="mt-4 text-center d-flex flex-wrap">
            {
                products.map(product => (
                    <Product product={product} key={product.id} togglePurchased={togglePurchased} removeProduct={removeProduct} changeProduct={changeProduct} />
                ))
            }
            {
                !products.length && <h5 className="card card-body shadow">No Products Left</h5>
            }
        </div>
    )
}

export default Products
