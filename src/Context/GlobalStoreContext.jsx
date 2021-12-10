import React, { useState, createContext, useContext } from "react";


const GlobalStoreContext = createContext('');

function useGlobalStoreContext() {
    return useContext(GlobalStoreContext);
}

const StoreProvider = (props) => {
    const [store, setStore] = useState()

    return (
        <GlobalStoreContext.Provider value={[store, setStore]} >
            {props.children}
        </GlobalStoreContext.Provider>
    )
}

export {
    StoreProvider,
    useGlobalStoreContext
}

export default GlobalStoreContext


