import Logo from "../Logo";
import Button from "../Button";
import styles from "./Header.module.css";
import propTypes from "prop-types";
const Header = ({variant}) => {
    return (
        <header
            className={`${styles.header} ${styles[variant]}`}
        >
            <Logo />
            <nav className={styles.nav} >
                <Button variant="selected">HOME</Button>
                <Button variant="unselected">NUEVO VIDEO</Button>
                </nav>
        </header>
    );
};
Header.propTypes = {
    variant: propTypes.string,
};
Header.defaultProps = {
    variant: "headerHome",
};

export default Header;
