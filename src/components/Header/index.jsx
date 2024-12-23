import Logo from "../Logo";
import Button from "../Button";
import styles from "./Header.module.css";
const Header = () => {
    return (
        <header
            className={styles.header}
        >
            <Logo />
            <nav className={styles.nav} >
                <Button variant="selected">HOME</Button>
                <Button variant="unselected">NUEVO VIDEO</Button>
                </nav>
        </header>
    );
};

export default Header;
