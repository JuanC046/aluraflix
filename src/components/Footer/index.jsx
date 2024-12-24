import styles from "./Footer.module.css";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <h5 className={styles.title}>
                Desarrollado por Juan - {new Date().getFullYear()} &copy;
            </h5>

            <div className={styles.social}>
                <a
                    href="https://www.linkedin.com/in/juan-camilo-lopez-usma-developer"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/img/linkedin.png" alt="Linkedin" />
                </a>
                <a
                    href="https://github.com/JuanC046"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/img/github.png" alt="Github" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
