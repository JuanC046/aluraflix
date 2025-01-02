import Category from "../Category";
import styles from "./Banner.module.css";
import propTypes from "prop-types";

const Banner = ({ background, borderColor, category, title, description, image }) => {
    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.content}>
                <Category category={category} color={borderColor} />
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <img
                className={styles.image}
                src={image}
                alt={title}
                style={{ borderColor: borderColor }}
            />
        </section>
    );
};
Banner.propTypes = {
    background: propTypes.string.isRequired,
    borderColor: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
};
export default Banner;
