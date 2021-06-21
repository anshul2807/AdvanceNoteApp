import React ,{ createContext, useState} from 'react'

export const SidebarToggleContext = createContext();

export const SidebarToggleProvider = (props)=> {
    const [sideToggle,setSideToggle] = useState(true);
    return (
        <SidebarToggleContext.Provider value={ [sideToggle,setSideToggle]}>
            {props.children}
        </SidebarToggleContext.Provider>
    );
}
