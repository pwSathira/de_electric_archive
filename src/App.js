import "./App.css";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Quotes } from "./components/Pages/Quotes";
import { Gallery } from "./components/Pages/Gallery";
function App() {
    return (
        <>

            <Router>
                <NavBar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
            </Router>
            <Footer/>
        </>
    );
}

export default App;