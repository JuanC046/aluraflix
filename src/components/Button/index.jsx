import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ children, variant="selected" }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};

export default Button;
