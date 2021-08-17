import React from 'react';
import { Link } from 'react-router-dom';
import { listProdcts } from '../data/products';

export function Products() {
  return (
    <div>
      <h1>Products list</h1>

      <ul>
        {listProdcts.map((product) => (
          <li key={product.identifier}>
            <Link to={`/products/${product.identifier}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
