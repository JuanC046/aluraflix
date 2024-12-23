import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ children, variant}) => {
    return <button className={`${styles.button} ${styles[variant]}`} >{children}</button>;
};
// Button.defaultProps = {
//     variant: "filled",
//     color: "primary",
// };
// Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     variant: PropTypes.string,
//     color: PropTypes.string,
//     style: PropTypes.object,
// };
export default Button;
