import { DataContext } from "../Contexts";
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { getData } from "../../services/requests";
import categoriesJson from "./categories.json";
export const DataContextProvider = ({ children }) => {
    const categories = categoriesJson.categories;

    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     getData().then((data) => {
    //         setVideos(data);
    //     });
    // }, []);
    return (
        <DataContext.Provider value={{ categories }}>
            {children}
        </DataContext.Provider>
    );
};
DataContextProvider.propTypes = {
    children: propTypes.node.isRequired,
};
export default DataContext;
