import{useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import VideoGroup from "../../components/VideoGroup";
import Modal from "../../components/Modal";

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Header />
            <main>
                <Banner
                    background="https://previews.123rf.com/images/zmiter/zmiter1312/zmiter131200199/24334797-vector-comic-cartoon-merry-christmas-greeting-card.jpg"
                    category={"Christmas"}
                    title={"Celebra la navidad"}
                    description={"En esta navidad celebra con nosotros"}
                    image={
                        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                ></Banner>
                {["Christmas", "Halloween", "Thanksgiving"].map(
                    (category, index) => (
                        <VideoGroup
                            key={index}
                            category={category}
                        ></VideoGroup>
                    )
                )}
            </main>
            <Footer></Footer>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            ></Modal>
        </>
    );
};

export default Home;
