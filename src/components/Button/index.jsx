import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ children, variant }) => {
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

Button.defaultProps = {
    variant: "selected",
};

export default Button;
