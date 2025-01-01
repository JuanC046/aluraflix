import styles from "./NotFound.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function NotFound() {
    return (
        <>
        <Header variant=""/>
            <main className={styles.container}>
                <h2 className={styles.error}>404</h2>
                <p className={styles.text_error}>Página no encontrada</p>
            </main>
            <Footer />
        </>
    );
}

export default NotFound;
