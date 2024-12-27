import { Link } from "react-router-dom";

import propTypes from "prop-types";
import Logo from "../Logo";
import Button from "../Button";
import styles from "./Header.module.css";

const Header = ({ variant = "headerHome" }) => {
    return (
        <header className={`${styles.header} ${styles[variant]}`}>
            <Logo />
            <nav className={styles.nav}>
                <Link to={"/"}>
                    <Button
                        variant={
                            variant === "headerHome" ? "selected" : "unselected"
                        }
                    >
                        HOME
                    </Button>
                </Link>
                <Link to={"/create"}>
                    <Button
                        variant={
                            variant === "headerCreate"
                                ? "selected"
                                : "unselected"
                        }
                    >
                        NUEVO VIDEO
                    </Button>
                </Link>
            </nav>
        </header>
    );
};
Header.propTypes = {
    variant: propTypes.string,
};

export default Header;
