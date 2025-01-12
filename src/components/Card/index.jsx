import { useContext } from "react";
import { deleteData } from "../../services/localStorage";
import propTypes from "prop-types";
import styles from "./Card.module.css";
import ModalContext from "../../context/ModalContext";
import { Link } from "react-router-dom";
const Card = ({ id, title, category, image, video, description, color }) => {
    const { setIsOpen, setData } = useContext(ModalContext);

    const handleDelete = () => {
        if (!confirm("¿Estás seguro de que quieres eliminar este video?")) {
            return;
        }
        deleteData(id).then((response) => {
            console.log("Response", response);
            alert("Card eliminado exitosamente");
        });
    };
    return (
        <article className={styles.card} style={{ borderColor: color }}>
            <Link className={styles.link} to={`/${id}`}>
                <img className={styles.image} src={image} alt={title} />
            </Link>
            <div className={styles.options} style={{ borderColor: color }}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={handleDelete}
                >
                    <img src="icons/delete.svg" alt="delete" />
                    BORRAR
                </button>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => {
                        setIsOpen(true);
                        setData({
                            id,
                            title,
                            category,
                            image,
                            video,
                            description,
                        });
                    }}
                >
                    <img src="icons/edit.svg" alt="edit" />
                    EDITAR
                </button>
            </div>
        </article>
    );
};
Card.propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    video: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
};
export default Card;
