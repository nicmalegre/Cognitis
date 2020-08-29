import React, {useState, createContext} from 'react';

//create company context
export const ProviderContext = createContext();



//create company provider
export const ProvidersProvider = (props) => {
    const [dataProv, setDataProv]= useState({
        providers: [],
    }); 
    return ( 
        <ProviderContext.Provider value={[dataProv, setDataProv]}>
             {props.children}
        </ProviderContext.Provider>
     );
    }
 