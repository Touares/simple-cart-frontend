import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/products-slice";
import axios from "axios";
import Filter from "./filtering";
import SearchBox from "./LiveSearchBox";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  const categories = useSelector(state => state.products.categories)
  const filter = useSelector(state => state.products.filter)
  const categorySearch = useSelector(state => state.products.categorySearch)
  const productSearch = useSelector(state => state.products.productSearch)


  let filteredCategories = categories;
  if (categorySearch) {
    filteredCategories = categories.filter((c) => {
      return c.toLowerCase().includes(categorySearch.toLowerCase());
    });
  }

  let filteredProducts = products;
  if (productSearch) {
    filteredProducts = products.filter((p) => {
      return p.title.toLowerCase().includes(productSearch.toLowerCase());
    });
  } else if (filter) {
    filteredProducts =
      filter === "all"
        ? products
        : products.filter((p) => {return (p.category.toLowerCase() === filter.toLowerCase())});
  }

useEffect ( async () => {
  const {data:products} = await axios.get('https://fakestoreapi.com/products');
  dispatch(productsActions.setProducts(products))

  const {data:categories} = await axios.get('https://fakestoreapi.com/products/categories');
  dispatch(productsActions.setCategories(categories))

 }, [])

 const handleCategorySearch = (sear) =>  {
  dispatch(productsActions.setCategorySearch(sear));
}
 const handleProductSearch = (sear) =>  {
  dispatch(productsActions.setProductSearch(sear));
}

 const handleFilter = (filter) =>  {
   dispatch(productsActions.setProductSearch(''));
  dispatch(productsActions.setFilter(filter));
}




  return (
    <div className="total-container">
      <div className="search">
      
      <SearchBox small={true} onChange={handleCategorySearch} placeHolder = 'search for categories' value = {categorySearch}/>
      <Filter filter={filter} handleFilter={handleFilter} query = {filteredCategories}/>
    </div>
    <div className="products">
    
      <SearchBox onChange= {handleProductSearch}  placeHolder= 'search for products' value = {productSearch}/>

      <ul className="products-container">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.title}
              imgURL={product.image}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Products;
