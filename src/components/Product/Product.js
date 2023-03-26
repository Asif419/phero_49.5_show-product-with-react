import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Product.css'
const Product = props => {
  const { title, image, id} = props.product;
  const addToCart = id => {
    addToDb(id);
  }
  const removeFromCart = id => {
    removeFromDb(id);
  }
  return (
    <div className='product'>
      <div>
        <h6>{title}</h6>
        <button style={{marginRight: '5px'}} onClick={() => addToCart(id)}>Add to cart</button>
        <button onClick={() => removeFromCart(id)}>Remove From cart</button>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default Product;