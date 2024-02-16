import React, { createContext, useState, useEffect } from 'react';

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategory, setSelectCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategory(selectCategory);
    }, [selectCategory]);

    const fetchSelectedCategory = (query) => {
        setLoading(true);
        // fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
        //     console.log(contents);
        //     setLoading(false);
        // })
        setLoading(false);
    }
    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategory,
            setSelectCategory,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}