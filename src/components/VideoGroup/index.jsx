import Card from "../Card";
import Category from "../Category";
import styles from "./VideoGroup.module.css";

import propTypes from "prop-types";
const VideoGroup = ({ videos, category }) => {
    return (
        videos.length > 0 && (
            <section className={styles.videoGroup}>
                <Category
                    category={category.name}
                    color={category.color}
                ></Category>
                <ul className={styles.list}>
                    {videos.map((video, index) => (
                        <li key={index}>
                            <Card
                                // id={video.id}
                                // image={video.image}
                                // title={video.title}
                                // category={video.category}
                                // video={video.video}
                                // description={video.description}
                                {...video}
                                color={category.color}
                            ></Card>
                        </li>
                    ))}
                </ul>
            </section>
        )
    );
};

VideoGroup.propTypes = {
    videos: propTypes.array.isRequired,
    category: propTypes.object.isRequired,
};

export default VideoGroup;
