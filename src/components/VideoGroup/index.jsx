import Card from "../Card";
import Category from "../Category";
import styles from "./VideoGroup.module.css";
const VideoGroup = ({ videos = [1, 2, 3, 4], category }) => {
    return (
        <section className={styles.videoGroup}>
            <Category category={category} color={"#021012"}></Category>
            <ul className={styles.list}>
                {videos.map((video, index) => (
                    <li key={index}>
                        <Card
                            image={
                                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            title={"Christmas"}
                            video={
                                "https://www.youtube.com/watch?v=6Dh-RL__uN4"
                            }
                            description={"Celebra la navidad con nosotros"}
                            color={"#FF0000"}
                        ></Card>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default VideoGroup;
