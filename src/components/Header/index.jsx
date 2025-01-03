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
                        <img
                            className={styles.icon}
                            src={
                                variant === "headerHome"
                                    ? "/icons/home-active.svg"
                                    : "/icons/home.svg"
                            }
                            alt="home"
                        />
                        <span
                            className={
                                variant === "headerHome"
                                    ? styles["text-active"]
                                    : styles["text-inactive"]
                            }
                        >
                            HOME
                        </span>
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
                        <img
                            className={styles.icon}
                            src={
                                variant === "headerCreate"
                                    ? "/icons/new-active.svg"
                                    : "/icons/new.svg"
                            }
                            alt="new video"
                        />
                        <span
                            className={
                                variant === "headerCreate"
                                    ? styles["text-active"]
                                    : styles["text-inactive"]
                            }
                        >
                            NUEVO VIDEO
                        </span>
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
