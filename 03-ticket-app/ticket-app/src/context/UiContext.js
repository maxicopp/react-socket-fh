import React, { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {

    const [hideMenu, setHideMenu] = useState(false);

    const handleShowMenu = () => setHideMenu(false);
    const handleHideMenu = () => setHideMenu(true);

    return (
        <UiContext.Provider value={{ hideMenu, handleShowMenu, handleHideMenu }}>
            {children}
        </UiContext.Provider>
    )
}
