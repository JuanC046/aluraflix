import { useState, useEffect } from "react";

import styles from "./OptionsList.module.css";
import propTypes from "prop-types";
const OptionsList = ({
    variant,
    label,
    name,
    value,
    placeholder = "",
    onChange,
    required,
    options,
    register,
    rules,
    errors,
    errorMessage,
}) => {
    const [message, setMessage] = useState(placeholder);
    useEffect(() => {
        console.log("in useEffect of", name, errors[name]);
        if (errors[name]) {
            console.log("setting error message");
            setMessage(errorMessage);
        } else {
            setMessage(placeholder);
        }
    }, [errors[name]]);
    return (
        <div className={styles["options-list"]}>
            <label
                htmlFor={name}
                className={errors[name] ? styles["label-error"] : styles.label}
            >
                {label}
            </label>
            <select
                className={
                    errors[name]
                        ? styles["select-error"]
                        : styles[`select-${variant}`]
                }
                {...register(name, rules)}
                title={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                <option
                    className={
                        errors[name]
                            ? styles["option-error"]
                            : styles[`option-${variant}`]
                    }
                    value=""
                    defaultValue=""
                    disabled
                    hidden
                >
                    {message}
                </option>
                {options.map((option, index) => (
                    <option
                        className={`${styles[`option-${variant}`]} ${
                            errors[name] && styles["option-error"]
                        }}`}
                        key={index}
                        value={option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
OptionsList.propTypes = {
    variant: propTypes.string,
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    placeholder: propTypes.string,
    onChange: propTypes.func.isRequired,
    required: propTypes.bool,
    options: propTypes.array.isRequired,
    register: propTypes.func.isRequired,
    rules: propTypes.object,
    errors: propTypes.object,
    errorMessage: propTypes.string,
};

export default OptionsList;
