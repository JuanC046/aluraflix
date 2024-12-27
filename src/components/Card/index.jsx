import { useContext } from "react";


import styles from "./Card.module.css";
import ModalContext from "../../context/ModalContext";

const Card = ({ image, title, video, description, color }) => {
    const { setIsOpen, setFormData } = useContext(ModalContext);
    return (
        <article className={styles.card} style={{ borderColor: color }}>
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.options} style={{ borderColor: color }}>
                <button className={styles.button}
                    onClick={() => {
                        alert("Borrado");
                    }}
                >
                    <img src="icons/delete.svg" alt="delete" />
                    BORRAR
                </button>
                <button className={styles.button} 
                onClick={() => {
                    setIsOpen(true);
                    setFormData({
                        title,
                        image,
                        video,
                        description,
                    });
                }}>
                    <img src="icons/edit.svg" alt="edit" />
                    EDITAR
                </button>
            </div>
        </article>
    );
};
export default Card;
