import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;