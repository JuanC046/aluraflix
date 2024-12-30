import { useState } from 'react';
import propTypes from 'prop-types';

import { ModalContext } from '../Contexts';

export const ModalContextProvider = ({ children }) => {
    const [data, setData] = useState({
        id: "",
        title: "",
        category: "",
        image: "",
        video: "",
        description: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ModalContext.Provider value={{
            isOpen,
            setIsOpen,
            data,
            setData
        }}>
            {children}
        </ModalContext.Provider>
    );
}

ModalContextProvider.propTypes = {
    children: propTypes.node.isRequired
};

export default ModalContext;