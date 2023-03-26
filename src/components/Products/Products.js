import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      const data = await res.json(res);
      setProducts(data);
    }
    fetchData();
  }, [])
  return (
    <div>
      <h4>My all Products</h4>
      <div className='product-container'>
        {
          products.map(product => <Product 
            product={product}
            key={product.id}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;