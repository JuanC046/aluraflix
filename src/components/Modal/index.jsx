import { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import TextField from "../TextField";
import ModalContext from "../../context/ModalContext";

const Modal = () => {
    const { isOpen, setIsOpen, formData, setFormData } =
        useContext(ModalContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // Handle form submission logic
    };

    const handleClear = () => {
        console.log("Clearing form");
        setFormData({
            title: "",
            image: "",
            video: "",
            description: "",
        });
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay}></div>
            <dialog open className={styles.modal}>
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    method="dialog"
                >
                    <h3 className={styles["form-title"]}>EDITAR CARD:</h3>
                    <TextField
                        label="Título"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Imagen"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Video"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Descripción"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <div className={styles["form-actions"]}>
                        <Button type="submit">Guardar</Button>
                        <Button
                            type="button"
                            onClick={handleClear}
                            variant="unselected"
                        >
                            Limpiar
                        </Button>
                    </div>
                    <button
                    type="button"
                        className={styles.close}
                        formMethod="dialog"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <img src="/icons/cross.svg" alt="close" />
                    </button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;
