import React from 'react'
import "./Product.scss"
import {PRODUCTS} from "../../static"
const Product = () => {
    const productItems = PRODUCTS?.map(product=> (
        <div className="wrapper__card" key={product.id}>
            <img src={product.url} alt="" />
            <h3>{product.title}</h3>
            <strong>{product.price ? product.price+" USD" : "Free"}</strong>
        </div>
    ))
  return (
    <div>
        <h2>Product</h2>
        <div className="wrapper">
            {productItems}
        </div>
    </div>
  )
}
export default Product