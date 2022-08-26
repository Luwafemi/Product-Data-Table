## • An optimization of the Filterable Product Data Table example from the React official documentation [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html) 




1. The example from the official documentation assumes that the data (PRODUCTS) has been sorted, i.e. all products belonging to a particular category immediately follow one another. If the order is changed, for example:

``` javascript
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
```
'Sporting Goods' and 'Electronics' ProductCategoryRow components would each be rendered three times. This repository fixes this issue.

2. Also, the search box in the example is case sensitive. This repository fixes that as well.

3. Repo also contains better styling.