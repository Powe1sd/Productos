import React from "react";

const gorras = [
  {
    nombre: "Gorra Nike Negra",
    precio: "$28.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra1.jpg",
  },
  {
    nombre: "Gorra Adidas Blanca",
    precio: "$28.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra2.jpg",
  },
  {
    nombre: "Gorra Puma Azul",
    precio: "$80.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra3.jpg",
  },
  {
    nombre: "Gorra Jordan Roja",
    precio: "$82.000",
    envio: "¡Envío GRATIS! FULL",
    img: "../public/gorras/gorra4.jpg",
  },
  {
    nombre: "Gorra Vans Bordada",
    precio: "$90.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra5.jpg",
  },
  {
    nombre: "Gorra Under Armour",
    precio: "$85.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra2.jpg",
  },
  // Puedes repetir si quieres más elementos visuales
];

const Modulo5 = () => {
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
          animation: "scrollGorras 40s linear infinite",
          gap: "20px",
          padding: "15px",
          width: "max-content",
        }}
      >
        {gorras.concat(gorras).map((gorra, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "200px",
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
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Modulo5;
