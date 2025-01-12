import { DataContext } from "../Contexts";
import propTypes from "prop-types";
import categoriesJson from "./categories.json";
export const DataContextProvider = ({ children }) => {
    const categories = categoriesJson.categories;
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
