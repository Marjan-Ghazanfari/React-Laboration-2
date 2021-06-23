import { useState, useRef } from 'react'

const AddProduct = ({addProduct}) => {
    const [name, setName] = useState('');
    const [error, setError] = useState(undefined);
    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
    
        if(name.trim() !== '') {
          setError(undefined)
          addProduct(name);
          setName('');
          inputRef.current.focus();
        } else {
            setError('You Should Enter Product Name')
        }
      }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mt-4">
                <div className="form-floating col-8">
                    <input id="productName" className="form-control" placeholder="Enter Product Name..." type="text" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
                    <small className="text-danger">{error}</small>
                    <label for="productName">Enter Product Name...</label>
                </div>
                <div>
                    <input type="submit" className="btn btn-success p-3" value="ADD PRODUCT" />
                </div>
            </div>
        </form>
    )
}

export default AddProduct
