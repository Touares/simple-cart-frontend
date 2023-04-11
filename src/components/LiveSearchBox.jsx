import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productsActions } from '../store/products-slice';


const SearchBox = (props) => {
  // const search = useSelector(state => state.products.search);
    const {value, placeHolder, onChange, small} = props;
  const dispatch = useDispatch();


  

    return ( 

      
          
        <div className={small?"form-group":"form-floating mb-3 "} style={ {marginTop:'20px',}}   >
          <input
          id="floatingInput"
            className={small?"form-control form-control-sm": "form-control"}
            type="search"
            placeholder={placeHolder}
            aria-label="Search"
            style={{ width: "100%" }}
            onChange={(event) => onChange(event.currentTarget.value)}
            value={value}
          />
          {!small? <label style={small? {margin:'0',}:null} className= {small?"col-form-label col-form-label-sm mt-4": null} htmlFor="floatingInput">{placeHolder}</label>: null}
          
          
          {/* <button
                              class="btn btn-outline-success my-2 my-sm-0"
                              type="submit"
                            >
                              Search
                            </button> */}
        </div>

        );
        //     <div className="form-group">
        //     <input onChange={(e) => handleSearch(e.currentTarget.value)} value={search} className="form-control form-control-sm" type="text" placeholder="search for categories" id="inputSmall"/>
        //   </div>
}
 
export default SearchBox;