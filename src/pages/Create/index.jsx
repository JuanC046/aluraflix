import styles from "./Create.module.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/Form";

import { postData } from "../../services/requests";
const Create = () => {
    const handleSubmit = (data) => {
        postData(data).then((response) => {
            console.log("Response", response);
            alert("Video creado exitosamente");
        });
    }
    return (
        <>
            <Header variant="headerCreate" />
            <main>
                <section>
                    <h2 className={styles.title}>NUEVO VIDEO</h2>
                    <h5 className={styles.subtitle}>
                        Complete el formulario para crear una nueva tarjeta de
                        video
                    </h5>
                </section>

                <Form
                    onSubmit={handleSubmit}
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
