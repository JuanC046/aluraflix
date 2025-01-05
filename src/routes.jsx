import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";
const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Player />} />
                <Route path="/create" element={<Create />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
