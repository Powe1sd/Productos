import React from "react";
import MeliNavbar from "./modules/NavBar";
import Seccion3 from "./modules/Seccion3";
import Modulo5 from "./modules/Modulo5"; // o desde tu carpeta modules si va ahí

function App() {
  return (
    <div>
      <MeliNavbar />
      <Seccion3 />
      <Modulo5 /> {/* Aquí insertamos el módulo de gorras */}
      <div className="min-h-screen bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto">
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
