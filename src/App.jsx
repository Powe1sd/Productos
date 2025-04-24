import React from "react";
import MeliNavbar from "./modules/NavBar";
import Seccion3 from "./modules/Seccion3";
import Modulo5 from "./modules/Modulo5";
import Modulo6 from "./modules/Modulo6";
import Modulo8 from "./modules/Modulo8";
import Modulo9 from "./modules/Modulo9";

function App() {
  return (
    <div>
      <MeliNavbar />
      <Seccion3 />
      <Modulo5 />
      <div className="min-h-screen bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="container mt-4">
            <h1 className="text-xl font-bold mb-2">Venta de productos</h1>
            <p className="text-gray-700">Productos</p>
            <Modulo6 />
            <Modulo8 />
            <Modulo9 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
