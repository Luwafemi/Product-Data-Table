 import React from "react";
 import './index.css';

 class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr id = {this.props.category}>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    //Save all products categories in an array
    var categoryArray = []
    this.props.products.forEach((product)=>categoryArray.push(product.category))
     //Remove duplicate categories
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
    categoryArray = removeDuplicates(categoryArray)
    
    //save category and corresponding products in an array
    const rows = [];
    categoryArray.forEach((category)=>{
      // search products array for entries with particular category name and save in   categoryProductsArray
      let categoryProductsArray = []
      this.props.products.forEach((product)=>{
        if (product.category == category){
          categoryProductsArray.push(<ProductRow
            product={product}
            key={product.name} 
           />)
        }
      })
      rows.push(
          <ProductCategoryRow
            category={category}
            key={category} 
           />,...categoryProductsArray
        )
    })
    

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
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


 
export default FilterableProductTable;
