import React from "react";
import PropsTypes from "prop-types";

export const ProductRow = props => {
  const price = props.price;
  const product = props.product;
  const name = product.stocked ? (
    props.name
  ) : (
    <span style={{ color: "red" }}>{props.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

ProductRow.propsTypes = {
  // product: PropsTypes.object.isRequired,
  name: PropsTypes.string.isRequired,
  price: PropsTypes.string.isRequired
};
