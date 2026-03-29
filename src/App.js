import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Main from "./Pages/Main";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;