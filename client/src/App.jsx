import { Route, Routes } from "react-router-dom";

import ClientePage from "./pages/ClientePage.jsx";
import ClienteForm from "./pages/ClienteForm.jsx";
import ClienteVencidoPage from "./pages/ClienteVencidoPage.jsx";
import ProductoPage from "./pages/ProductoPage.jsx";
import ProductForm from "./pages/productoForm.jsx";
import Login from "./pages/Login.jsx";

import { ContextProvider } from "./context/Provider.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client" element={<ClientePage />} />
        <Route path="/addClient" element={<ClienteForm />} />
        <Route path="/editClient/:id" element={<ClienteForm />} />
        <Route path="/clientOut" element={<ClienteVencidoPage />} />
        <Route path="/products" element={<ProductoPage />} />
        <Route path="/addProduct" element={<ProductForm />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
