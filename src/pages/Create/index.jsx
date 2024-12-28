import styles from "./Create.module.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/Form";
const Create = () => {
    return (
        <>
            <Header variant="headerCreate" />
            <main>
                <h2 className={styles.title} >NUEVO VIDEO</h2>
                <h5 className={styles.subtitle} >Complete el formulario para crear una nueva tarjeta de video</h5>
                <Form
                    data={{
                        title: "",
                        category: "",
                        image: "",
                        video: "",
                        description: "",
                    }}
                    variant="create"
                />
            </main>
            <Footer></Footer>
        </>
    );
};

export default Create;
