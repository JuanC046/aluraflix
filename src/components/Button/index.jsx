import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ children, variant = "selected", type = "button", onClick }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit"]),
    onClick: PropTypes.func,
};

export default Button;
