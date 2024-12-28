import { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import TextField from "../TextField";
import ModalContext from "../../context/ModalContext";
import { useForm } from "react-hook-form";
import OptionsList from "../OptionsList";

import Form from "../Form";
const Modal = () => {
    const { isOpen, setIsOpen, data } =
        useContext(ModalContext);

    // const { register, handleSubmit, formState: {errors} } = useForm();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const onSubmit = (data) => {
    //     console.log("Form submitted");
    //     console.log(data);
    //     // Handle form submission logic
    // };

    // const handleClear = () => {
    //     console.log("Clearing form");
    //     setFormData({
    //         title: "",
    //         image: "",
    //         video: "",
    //         description: "",
    //     });
    // };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay}></div>
            <dialog open className={styles.modal}>
                <h3 className={styles.title}>EDIT CARD:</h3>
                <Form
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
