import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import VideoGroup from "../../components/VideoGroup";
import Modal from "../../components/Modal";

import { ModalContextProvider } from "../../context/ModalContext";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { getData } from "../../services/requests";
const Home = () => {
    const { categories } = useContext(DataContext);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
            getData().then((data) => {
                setVideos(data);
            });
        }, [videos]);
    return (
        <>
            <Header />
            <main>
                <Banner
                    background="https://previews.123rf.com/images/zmiter/zmiter1312/zmiter131200199/24334797-vector-comic-cartoon-merry-christmas-greeting-card.jpg"
                    borderColor="#FF0000"
                    category={"Christmas"}
                    title={"Celebra la navidad"}
                    description={"En esta navidad celebra con nosotros"}
                    image={
                        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                ></Banner>
                <ModalContextProvider>
                    <Modal></Modal>
                    {categories.map((category, index) => (
                        <VideoGroup
                            videos={videos.filter(video => video.category === category.name)}
                            key={index}
                            category={category}
                        ></VideoGroup>
                    ))}
                </ModalContextProvider>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
