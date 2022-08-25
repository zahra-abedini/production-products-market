import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing";
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="ui container main-container">
            <Header />

            <Routes>
                <Route path="/" exact element={<Landing />} />
                {/* <Route element={<About />} /> */}
            </Routes>
            <Footer />

        </div>
    );
}

export default App;
