import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { productsActions } from "../store/products-slice";
import './filtering.css'





const Filter = (props) => {
  const {query:categories, handleFilter} = props;
    const dispatch = useDispatch();
    const filter = useSelector(state => state.products.filter)
    console.log(filter)
  // const categories = useSelector(state => state.products.categories)
  
  
    
    
    return ( 
      <ul class="list-group">
        <li onClick={() => handleFilter('all')}  style={{cursor: "pointer"}}  
            // className="list-group-item active"><h5>All</h5></li>
           className={filter === 'all' ? "list-group-item active": "list-group-item" }><h5>All Categories</h5></li> 
        {categories.map(category => {
          return (
            <li onClick={() => handleFilter(category)}  key={category} style={{cursor: "pointer"}}
            className={filter === category ? "list-group-item active": "list-group-item" }><h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5></li>

          )
        })}
  {/* <li class="list-group-item">New <span class="badge">12</span></li>
  <li class="list-group-item">Deleted <span class="badge">5</span></li>
  <li class="list-group-item">Warnings <span class="badge">3</span></li> */}
</ul>
      //   <div className="list-group">
      // <div className="form-group">
      //   <input className="form-control form-control-sm" type="text" placeholder="search for categories" id="inputSmall"/>
      // </div>
      //   <a onClick={() => handleFilter('all')}   
      //       className={ handleClass('all')}><h5>All</h5></a>
      //   {categories.map(category => {
      //     return (
      //       <a onClick={() => handleFilter(category)}  key={category} 
      //       className={handleClass(category)}><h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5></a>

      //     )
      //   })}
  
      // </div>
     );
}
 
export default Filter;