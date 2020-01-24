import React from "react";
import PropsTypes from "prop-types";

export const ProductCategoryRow = props => {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

ProductCategoryRow.propsTypes = {
  category: PropsTypes.string.isRequired
};
