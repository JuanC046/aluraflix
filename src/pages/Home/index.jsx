import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import VideoGroup from "../../components/VideoGroup";
import Modal from "../../components/Modal";

import { ModalContextProvider } from "../../context/ModalContext";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { getData } from "../../services/localStorage";
import NoVideos from "../../components/NoVideos";
const Home = () => {
    const { categories } = useContext(DataContext);
    const [videos, setVideos] = useState([]);
    const [bannerVideo, setBannerVideo] = useState({});

    useEffect(() => {
        getData().then((data) => {
            if (data.length === 0) return;
            setVideos(data);
            setBannerVideo({
                ...data[0],
                borderColor: categories.find(
                    (category) => category.name === data[0].category
                ).color,
            });
        });
    }, [videos, bannerVideo, categories]);

    return (
        <>
            <Header />
            <main>
                <Banner
                    background="https://media.istockphoto.com/id/2139109900/photo/black-dark-blue-gray-white-abstract-background-gradient-noise-grain-granular-particle-rough.jpg?s=1024x1024&w=is&k=20&c=TaAMaS5rHTf6QLk3AZH8OmwAtandDSn8znc97n28Ceo="
                    borderColor={bannerVideo.borderColor || "#FF0000"}
                    category={bannerVideo.category || "Christmas"}
                    title={bannerVideo.title || "Celebra la navidad"}
                    description={
                        bannerVideo.description ||
                        "En esta navidad celebra con nosotros"
                    }
                    image={
                        bannerVideo.image ||
                        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                ></Banner>
                <ModalContextProvider>
                    <Modal></Modal>

                    {videos.length === 0 ? (
                        <NoVideos />
                    ) : (
                        categories.map((category, index) => (
                            <VideoGroup
                                videos={videos.filter(
                                    (video) => video.category === category.name
                                )}
                                key={index}
                                category={category}
                            ></VideoGroup>
                        ))
                    )}
                </ModalContextProvider>
            </main>
            <Footer />
        </>
    );
};

export default Home;
