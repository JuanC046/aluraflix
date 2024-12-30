import { useContext } from "react";
import { deleteData } from "../../services/requests";

import styles from "./Card.module.css";
import ModalContext from "../../context/ModalContext";

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
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.options} style={{ borderColor: color }}>
                <button className={styles.button} onClick={handleDelete}>
                    <img src="icons/delete.svg" alt="delete" />
                    BORRAR
                </button>
                <button
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
export default Card;
