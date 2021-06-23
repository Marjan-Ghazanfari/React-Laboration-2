import { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({products, togglePurchased, removeProduct, changeProduct}) => {
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        setSortedProducts(products.sort((a, b) => {
            return a.purchased === b.purchased ? 0 : a.purchased ? 1 : -1
        }));
    }, [products]);

    return (
        <div className="mt-4 text-center d-flex flex-wrap">
            {
                sortedProducts.map(product => (
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
