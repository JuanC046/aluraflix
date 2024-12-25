import styles from "./Category.module.css";
import propTypes from "prop-types";
const Category = ({ category, color }) => {
    return (
        <h3 className={styles.category} style={{ backgroundColor: color }}>
            {category.toUpperCase()}
        </h3>
    );
};

Category.propTypes = {
    category: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
};
export default Category;
