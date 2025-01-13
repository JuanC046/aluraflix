import styles from "./Player.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import NotFound from "../NotFound";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getVideo } from "../../services/localStorage";
const Player = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    useEffect(() => {
        getVideo(id).then((data) => setVideo(data));
    }, [id]);
    if (!video) return <NotFound />;
    return (
        <>
            <Header variant="headerPlayer" />
            <section className={styles.container}>
                <iframe
                    className={styles.video}
                    width="100%"
                    height="100%"
                    src={video.video}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className={styles.info}>
                    <h3 className={styles.title}>{video.title}</h3>
                    <p className={styles.description}>{video.description}</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Player;
