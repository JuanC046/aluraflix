import styles from "./TextField.module.css";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

const TextField = ({
    variant,
    label,
    type = "text",
    name,
    value,
    placeholder = "",
    onChange,
    register,
    rules,
    errors,
    errorMessage,
}) => {
    const [message, setMessage] = useState(placeholder);
    useEffect(() => {
        if (errors[name]) {
            setMessage(errorMessage);
        } else {
            setMessage(placeholder);
        }
    }, [errors[name]]);
    return (
        <div className={styles["form-group"]}>
            <label
                htmlFor={name}
                className={errors[name] ? styles["label-error"] : styles.label}
            >
                {label}
            </label>
            {name.toLowerCase() !== "description" ? (
                <input
                    className={`${styles[`input-${variant}`]} ${
                        errors[name] && styles["input-error"]
                    }`}
                    type={type}
                    id={name}
                    {...register(name, { ...rules })}
                    value={value}
                    placeholder={message}
                    onChange={onChange}
                />
            ) : (
                <textarea
                    className={`${styles[`input-${variant}`]}
                     ${errors[name] && styles["input-error"]}`}
                    id={name}
                    {...register(name, { ...rules })}
                    value={value}
                    onChange={onChange}
                ></textarea>
            )}
            {/* {errors[name] && (
                <span style={{ color: "red" }}>{errorMessage}</span>
            )} */}
        </div>
    );
};

TextField.propTypes = {
    variant: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    placeholder: propTypes.string,
    onChange: propTypes.func.isRequired,
    register: propTypes.func.isRequired,
    rules: propTypes.object,
    errors: propTypes.object,
    errorMessage: propTypes.string,
};

export default TextField;
