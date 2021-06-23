import { useState, useEffect} from 'react'

const ChangeProduct = ({product, changeProductName}) => {
    const [text, setText] = useState('');

    useEffect(() => {
      setText(product.name)
    }, [product.name])
  
    const handleSubmit = e => {
      e.preventDefault();
      changeProductName(text)
    }

    return (
        <form className="form-control border-0" onSubmit={handleSubmit}>
            <input className="py-1 me-1" type="text" value={text} onChange={e => setText(e.target.value)} />
            <button className="btn btn-success border-0 mb-1">OK</button>
        </form>
    )
}

export default ChangeProduct
