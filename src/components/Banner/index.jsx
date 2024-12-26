import Category from "../Category";
import styles from "./Banner.module.css";

const Banner = ({ background, category, title, description, image }) => {
    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.content}>
                <Category category={category} color={"#4369d2"} />
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <img
                className={styles.image}
                src={image}
                alt={title}
                style={{ borderColor: "#4369d2" }}
            />
        </section>
    );
};
export default Banner;
