import { useContext } from "react";
import styles from "./Modal.module.css";
import ModalContext from "../../context/ModalContext";
import Form from "../Form";

import { putData } from "../../services/localStorage";
const Modal = () => {
    const { isOpen, setIsOpen, data } = useContext(ModalContext);

    const handleSubmit = (data) => {
        putData(data).then((response) => {
            console.log("Response", response);
            alert("Card actualizado exitosamente");
            setIsOpen(false);
        });
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay}></div>
            <dialog open className={styles.modal}>
                <h3 className={styles.title}>EDIT CARD:</h3>
                <Form
                    onSubmit={handleSubmit}
                    formTitle="EDITAR CARD:"
                    data={data}
                    variant="edit"
                ></Form>
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
            </dialog>
        </>
    );
};

export default Modal;
