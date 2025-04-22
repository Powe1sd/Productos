import React from "react";
import MeliNavbar from "./modules/NavBar";
import Seccion3 from "./modules/Seccion3";
import Modulo4 from "./modules/modulo4";

function App() {
  return (
    <div>
      <MeliNavbar />
      <Seccion3 />

      <div className="min-h-screen bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <Modulo4 />

          {/* Aquí puedes agregar más componentes o contenido de la página */}
          <div className="container mt-4">
            <h1 className="text-xl font-bold mb-2">Venta de productos</h1>
            <p className="text-gray-700">Productos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
