import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { HOME } from '../constants/routes';

import { listProdcts } from '../data/products';

export function Product() {
  const params = useParams<{ id: string }>();

  const product = listProdcts.find((p) => p.identifier === params.id);

  if (!product) {
    return <Redirect to={HOME} />;
  }

  return (
    <div>
      <h2>Detalhes do produto</h2>

      <p>
        Deseja comprar o produto <strong>{product?.name}</strong>
      </p>

      <button>Comprar</button>
    </div>
  );
}
