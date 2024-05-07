import { useEffect, useState } from 'react';
import styles from './listProduct.module.scss';

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
  <div>
    <h1>Product List</h1>
    <ul className={styles.ListProducts}>
      {products.map((product) => (
      <li key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} width="100" />
      </li>
      ))}
    </ul>
  </div>);
}
export default ListProducts;