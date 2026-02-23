import { Navbar } from './components/Navbar/Navbar.jsx';
import MainBlock from './components/mainBlock/mainBlock.jsx';
import Products from './components/products/products.jsx';
import Footer from './components/footer/footer.jsx';
import Props from './components/props/props.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBlock />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
