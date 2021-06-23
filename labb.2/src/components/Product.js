import { useState } from 'react'
import ChangeProduct from './ChangeProduct';

const Product = ({product, togglePurchased, removeProduct, changeProduct}) => {
    const [change, setChange] = useState(false);

    const toggleChange = () => {
        setChange(prev => !prev)
    }

    const changeProductName = (text) => {
        changeProduct(product.id, text)
        setChange(false)
    }

    const toggle = () => {
        togglePurchased(product.id)
    }

    const deleteProduct = () => {
        if(product.purchased)
            removeProduct(product.id)
        else
            alert('It needs to mark before deleting')
    }

    return (
        <div className="card col-4 shadow">
            <div className="card-body d-flex flex-column align-items-between justify-content-center">
                {
                    change
                    ? <ChangeProduct product={product} changeProductName={changeProductName} />
                    : <div>
                        <h5 className={`card-title ${product.purchased ? 'purchased' : ''}`} onClick={toggle}>{ product.name }
                        {
                            product.purchased
                            ? <i className="fas fa-check ms-1"></i>
                            : ''
                        }
                        </h5>
                      </div>
                }

                <div className="mt-3">
                    <button className="btn btn-secondary me-1" onClick={toggleChange}>CHANGE</button>
                    <button className="btn btn-danger" onClick={deleteProduct}>DELETE</button>
                </div>
            </div>    
        </div>
    )
}

export default Product
