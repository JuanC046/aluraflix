import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to={"/"}>
            <img
                src="img/Logo.svg"
                alt="Logo AluraFlix"
                className={styles.logo}
            />
        </Link>
    );
};
export default Logo;
