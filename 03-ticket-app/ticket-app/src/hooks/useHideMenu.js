import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';

export const useHideMenu = (hide) => {

    const { handleShowMenu, handleHideMenu } = useContext(UiContext);

    useEffect(() => {
        if (hide) {
            handleHideMenu();
        } else {
            handleShowMenu();
        }
    }, [handleHideMenu, handleShowMenu, hide]);

}
