import React, { useState, useEffect } from 'react';
import axios from 'axios';

// You can replace this with your WordPress site URL
const API_URL = 'http://localhost/wordpress/wp-json/custom/v2/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from WooCommerce public API
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img  alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default Products;
