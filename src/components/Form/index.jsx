import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import TextField from "../TextField";
import OptionsList from "../OptionsList";
import DataContext from "../../context/DataContext";
import styles from "./Form.module.css";
import propTypes from "prop-types";
const Form = ({ onSubmit, data, variant }) => {
    const [formData, setFormData] = useState(data);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { categories } = useContext(DataContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClear = () => {
        setFormData({
            id: data.id,
            title: "",
            category: "",
            image: "",
            video: "",
            description: "",
        });
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles[`form-${variant}`]}
        >
            <input {...register("id")} type="hidden" value={formData.id} />
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
                options={categories}
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

Form.propTypes = {
    onSubmit: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    variant: propTypes.string.isRequired,
};
export default Form;
