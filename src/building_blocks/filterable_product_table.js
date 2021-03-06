import React from "react";
import { SearchBar } from "./search_bar";
import { ProductTable } from "./product_table";

export const FilterableProductTable = props => {
  const [filterText, setFilterText] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={e => setFilterText(e)}
        onInStockChange={e => setInStockOnly(e)}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};
