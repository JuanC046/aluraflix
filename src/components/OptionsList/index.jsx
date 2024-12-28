import styles from "./OptionsList.module.css";
import propTypes from "prop-types";
const OptionsList = ({
    label,
    name,
    value,
    placeholder = "",
    onChange,
    required,
    options,
}) => {
    return (
        <div className={styles["options-list"]}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <select
                className={
                    placeholder !== ""
                        ? styles["select-nuevo"]
                        : styles["select-modal"]
                }
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="" defaultValue="" disabled hidden>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
OptionsList.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    placeholder: propTypes.string,
    onChange: propTypes.func.isRequired,
    required: propTypes.bool,
    options: propTypes.array.isRequired,
};

export default OptionsList;
