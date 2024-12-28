import { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";
import TextField from "../TextField";
import ModalContext from "../../context/ModalContext";
import { useForm } from "react-hook-form";
import OptionsList from "../OptionsList";
const Modal = () => {
    const { isOpen, setIsOpen, formData, setFormData } =
        useContext(ModalContext);

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (data) => {
        console.log("Form submitted");
        console.log(data);
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
                    onSubmit={handleSubmit((e) => onSubmit(e))}
                    className={styles.form}
                    method="dialog"
                >
                    <h3 className={styles["form-title"]}>EDITAR CARD:</h3>
                    <TextField
                        label="Título"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        register={register}
                        rules={{ required: true }}
                        errors={errors}
                        errorMessage="El título es requerido"
                    />
                    <OptionsList 
                        label="Categoria"
                        name="category"
                        value={formData.category}
                        // placeholder="Selecciona una categoría"
                        onChange={handleChange}
                        required
                        options={["programacion", "desarrollo personal", "otro"]}
                    />
                    <TextField
                        label="Imagen"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        register={register}
                        rules={{ required: true }}
                        errors={errors}
                        errorMessage="La imagen es requerida"
                    />
                    <TextField
                        label="Video"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                        register={register}
                        rules={{ required: true }}
                        errors={errors}
                        errorMessage="El video es requerido"
                    />
                    <TextField
                        label="Descripción"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        register={register}
                        rules={{ required: false }}
                        errors={errors}
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
