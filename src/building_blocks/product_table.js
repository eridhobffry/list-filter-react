import React from "react";
import { ProductCategoryRow } from "./product_category_row";
import { ProductRow } from "./product_row";
import PropsTypes from "prop-types";

export const ProductTable = props => {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  // const products = props;

  const rows = [];
  let lastCategory = null;

  const rowsPush = props.products.map(product => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow name={product.name} product={product} price={product.price} />
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

ProductTable.propsTypes = {
  filterText: PropsTypes.string.isRequired,
  inStockOnly: PropsTypes.bool.isRequired,
  products: PropsTypes.object.isRequired,
  rows: PropsTypes.element,
  lastCategory: PropsTypes.string
};
