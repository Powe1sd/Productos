import React from "react";

const gorras = [
  {
    nombre: "Gorra Nike Negra ",
    precio: "$28.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorra1.jpg",
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
  {
    nombre: "Gorra Otra Gorra 1",
    precio: "$70.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra3.jpg",
  },
  {
    nombre: "Gorra Otra Gorra 2",
    precio: "$75.000",
    envio: "¡Envío GRATIS! FULL",
    img: "../public/gorras/gorra4.jpg",
  },
  {
    nombre: "Gorra Otra Gorra 3",
    precio: "$95.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra5.jpg",
  },
  {
    nombre: "Gorra Otra Gorra 4",
    precio: "$88.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorras/gorra2.jpg",
  },
  {
    nombre: "Gorra Otra Gorra 5",
    precio: "$60.000",
    envio: "¡Envío GRATIS!",
    img: "../public/gorra1.jpg",
  },
  {
    nombre: "Gorra Otra Gorra 6",
    precio: "$65.000",
    envio: "¡Envío GRATIS! FULL",
    img: "../public/gorras/gorra3.jpg",
  },
];

const Modulo6 = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#333",
          textAlign: "center",
        }}
      >
        ¡Nuevas Gorras para Ti!
      </h2>

      <div // Modificamos el estilo de este div para usar Grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Crea columnas de al menos 200px de ancho, hasta llenar el espacio disponible
          gap: "20px", // Espacio entre las celdas de la cuadrícula
        }}
      >
        {gorras.map((gorra, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
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
                width: "100%",
                height: "auto",
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "contain",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#555" }}>
              {gorra.nombre}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#e44d26",
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
    </div>
  );
};

export default Modulo6;
