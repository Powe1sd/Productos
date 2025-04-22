import React from "react";

const productos = [
  {
    nombre: "Impresora 3d Creality Ender 3 V3 Ke",
    precio: "$1.684.000",
    cuotas: "en 3 cuotas de $561.333 con 0% interés",
    envio: "Envío gratis",
    img: "/img/impresoras3d.jpg",
  },
  {
    nombre: "Impresora 3d K1 Max Creality",
    precio: "$4.850.000",
    cuotas: "en 3 cuotas de $1.616.667 con 0% interés",
    envio: "Envío gratis",
    img: "/img/impresora2.jpg",
  },
  {
    nombre: "Bambu Lab X1C Combo Ams",
    precio: "$7.371.000",
    cuotas: "en 3 cuotas de $2.457.000 con 0% interés",
    envio: "Envío gratis",
    img: "/img/impresora3.jpg",
  },
  {
    nombre: "Impresora 3d Creality Ender 3 V3",
    precio: "$2.200.000",
    cuotas: "en 12 cuotas de $183.333 con 0% interés",
    envio: "Envío gratis FULL",
    img: "/img/impresora4.jpg",
  },
  {
    nombre: "Anycubic Photon Mono",
    precio: "$1.190.000",
    cuotas: "en 12 cuotas de $99.167 con 0% interés",
    envio: "Envío gratis",
    img: "/img/impresora5.jpg",
  },
];

const Modulo4 = () => {
  return (
    <div className="bg-white p-6 my-8 mx-auto max-w-7xl rounded-md shadow">
      <h2 className="text-xl font-semibold mb-6">
        Relacionado con tus visitas en Computación
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((prod, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={prod.img}
              alt={prod.nombre}
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="text-sm font-medium leading-tight mb-1">
              {prod.nombre}
            </h3>
            <p className="text-lg font-bold text-gray-800">{prod.precio}</p>
            <p className="text-xs text-gray-600">{prod.cuotas}</p>
            <p className="text-xs text-green-600 font-medium">{prod.envio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modulo4;
