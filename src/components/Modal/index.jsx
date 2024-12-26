import { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import TextField from "../TextField";

const Modal = ({ isOpen = true, onClose }) => {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        video: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const handleClear = () => {
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
            {/* <div className={styles.overlay} onClick={onClose}></div> */}
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
                        <Button type="button" onClick={handleClear}
                        variant="unselected"
                        >
                            Limpiar
                        </Button>
                    </div>
                    <button
                        className={styles.close}
                        formMethod="dialog"
                        onClick={onClose}
                    >
                        <img src="/icons/cross.svg" alt="close" />
                    </button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;
