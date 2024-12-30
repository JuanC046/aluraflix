import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import TextField from "../TextField";
import OptionsList from "../OptionsList";

import styles from "./Form.module.css";
const Form = ({ data, variant }) => {
    const [formData, setFormData] = useState(data);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
            category: "",
            image: "",
            video: "",
            description: "",
        });
    };
    return (
        <form
            onSubmit={handleSubmit((e) => onSubmit(e))}
            className={styles[`form-${variant}`]}
        >
            <TextField
                variant={variant}
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
                variant={variant}
                label="Categoria"
                name="category"
                value={formData.category}
                placeholder="Selecciona una categoría"
                onChange={handleChange}
                options={["programacion", "desarrollo personal", "otro"]}
                register={register}
                rules={{ required: true }}
                errors={errors}
                errorMessage="La categoría es requerida"
            />
            <TextField
                variant={variant}
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
                variant={variant}
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
                variant={variant}
                label="Descripción"
                name="description"
                value={formData.description}
                onChange={handleChange}
                register={register}
                rules={{ required: false }}
                errors={errors}
            />
            <div className={styles["form-actions"]}>
                <Button
                    type="submit"
                    variant={variant === "edit" ? "selected" : variant}
                >
                    Guardar
                </Button>
                <Button
                    type="button"
                    onClick={handleClear}
                    variant="unselected"
                >
                    Limpiar
                </Button>
            </div>
        </form>
    );
};

export default Form;
