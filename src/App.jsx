import { Navbar } from './components/Navbar/Navbar.jsx';
import MainBlock from './components/mainBlock/mainBlock.jsx';
import Products from './components/products/products.jsx';
import Footer from './components/footer/footer.jsx';
import Props from './components/props/props.jsx';

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBlock />} />
        <Route path="/products" element={<Products />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;