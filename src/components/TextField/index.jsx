import styles from "./TextField.module.css";
import propTypes from "prop-types";
const TextField = ({
    label,
    type = "text",
    name,
    value,
    placeholder = "",
    onChange,
}) => {
    return (
        <div className={styles["form-group"]}>
            <label htmlFor={name}>{label}</label>
            {name.toLowerCase() !== "description" ? (
                <input
                    className={
                        placeholder !== ""
                            ? styles["input-nuevo"]
                            : styles["input-modal"]
                    }
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            ) : (
                <textarea
                    className={
                        placeholder !== ""
                            ? styles["input-nuevo"]
                            : styles["input-modal"]
                    }
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                ></textarea>
            )}
        </div>
    );
};

TextField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  onChange: propTypes.func.isRequired,
}

export default TextField;
