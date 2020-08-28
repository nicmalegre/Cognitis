import React, {useState, createContext} from 'react';

//create company context
export const ProductContext = createContext();



//create company provider
export const ProductProvider = (props) => {
    const [dataProduct, setDataProduct]= useState({
        product:{},
        providers:[],
        categories:[],
    }); 
    return ( 
        <ProductContext.Provider value={[dataProduct, setDataProduct]}>
             {props.children}
        </ProductContext.Provider>
     );
    }
 
