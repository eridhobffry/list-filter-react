import React from "react";
import PropsTypes from "prop-types";

export const ProductRow = props => {
  const price = props.price;
  const product = props;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

ProductRow.propsTypes = {
  product: PropsTypes.object.isRequired,
  name: PropsTypes.string.isRequired,
  price: PropsTypes.string.isRequired
};
