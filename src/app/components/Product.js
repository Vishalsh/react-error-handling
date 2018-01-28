import React, {Component} from 'react';

const Product = (props) => {
  const {
    product
  } = props;
  return (
    <tr>
      <td>{product.code}</td>
      <td>{product.name}</td>
      <td>{product.attributes.color}</td>
      <td>{product.attributes.size}</td>
      <td>{product.attributes.brand}</td>
      <td>{product.price}</td>
    </tr>
  )
};

export default Product