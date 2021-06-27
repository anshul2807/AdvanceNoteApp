import React ,{ createContext, useState} from 'react'

export const DisplayListContext = createContext();

export const DisplayListProvider = (props)=> {
    const [displaylist,setDisplayList] = useState(false);
    return (
        <DisplayListContext.Provider value={[displaylist,setDisplayList]}>
            {props.children}
        </DisplayListContext.Provider>
    );
}
