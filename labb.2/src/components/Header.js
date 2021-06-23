import React from 'react'

const Header = ({title, products}) => {
    return (
        <div className="d-flex justify-content-center">
            <span className="badge rounded-pill bg-light text-dark p-3 fw-bold fs-4 w-100 d-flex justify-content-between align-items-center">
                <span><i className="fas fa-cash-register me-2"></i>{title}</span>
                <span className="badge bg-success">{products.length}</span>
            </span>
        </div>
    )
}

export default Header
