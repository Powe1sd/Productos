import React from "react";
import gorra2 from "../../public/gorras/gorra2.jpg";
import gorra3 from "../../public/gorras/gorra3.jpg";
import gorra4 from "../../public/gorras/gorra4.jpg";

const gorras = [
  {
    nombre: "Gorra Adidas Blanca",
    precio: "$28.000",
    envio: "¡Envío GRATIS!",
    img: gorra2,
  },
  {
    nombre: "Gorra Puma Azul",
    precio: "$80.000",
    envio: "¡Envío GRATIS!",
    img: gorra3,
  },
  {
    nombre: "Gorra Jordan Roja",
    precio: "$82.000",
    envio: "¡Envío GRATIS! FULL",
    img: gorra4,
  },
];

const Modulo5 = () => {
  const cantidadGorrasUnicas = gorras.length;
  const anchoGorra = 200;
  const espacioEntreGorras = 20;
  const tiempoPorGorra = 2; // Tiempo en segundos que tarda en pasar una gorra
  const tiempoAnimacion = tiempoPorGorra * cantidadGorrasUnicas; // Tiempo total de la animación

  // Ancho total de la lista duplicada (para asegurar el bucle)
  const anchoTotalListaDuplicada =
    (anchoGorra + espacioEntreGorras) * cantidadGorrasUnicas * 2 -
    espacioEntreGorras;

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "100%",
        margin: "20px 0",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#333",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        ¡Nuevas Gorras para Ti!
      </h2>
      <div
        style={{
          display: "flex",
          animation: `scrollGorras ${tiempoAnimacion}s linear infinite`,
          gap: `${espacioEntreGorras}px`,
          padding: "15px",
          width: `${anchoTotalListaDuplicada}px`,
        }}
      >
        {gorras.concat(gorras).map((gorra, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: `${anchoGorra}px`,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease-in-out",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={gorra.img}
              alt={gorra.nombre}
              style={{
                width: "80%",
                height: "auto",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            />
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              {gorra.nombre}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#e44d26",
                marginBottom: "5px",
              }}
            >
              {gorra.precio}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "green",
                fontWeight: "bold",
              }}
            >
              {gorra.envio}
            </p>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scrollGorras {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-${
              anchoGorra + espacioEntreGorras
            }px * ${cantidadGorrasUnicas})); }
          }
        `}
      </style>
    </div>
  );
};

export default Modulo5;
