import React from "react";
// import deporte1 from "../../public/deporte1.jpg"; // Comentado
// import deporte2 from "../../public/deporte2.jpg"; // Comentado
// import deporte3 from "../../public/deporte3.jpg"; // Comentado
// import deporte4 from "../../public/deporte4.jpg"; // Comentado
// import deporte5 from "../../public/deporte5.jpg"; // Comentado

const productosDeportes = [
  { nombre: "Balón de Fútbol Profesional", precio: "$90.000", envio: "¡Envío GRATIS!" },
  { nombre: "Zapatillas de Running de Alto Rendimiento", precio: "$280.000", envio: "Envío Estándar" },
  { nombre: "Raqueta de Tenis de Grafito", precio: "$150.000", envio: "¡Envío GRATIS! FULL" },
  { nombre: "Pesas Ajustables (Par)", precio: "$220.000", envio: "Envío Rápido" },
  { nombre: "Bicicleta de Montaña Aro 29", precio: "$850.000", envio: "¡Envío GRATIS!" },
  { nombre: "Tabla de Skateboard Profesional", precio: "$180.000", envio: "Envío Estándar" },
  { nombre: "Guantes de Boxeo de Cuero", precio: "$120.000", envio: "¡Envío GRATIS! FULL" },
  { nombre: "Gafas de Natación Antiempañantes", precio: "$45.000", envio: "Envío Rápido" },
  { nombre: "Cuerda de Saltar con Contador", precio: "$30.000", envio: "¡Envío GRATIS!" },
  { nombre: "Esterilla de Yoga Antideslizante", precio: "$60.000", envio: "Envío Estándar" },
];

const Modulo9 = () => {
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
        ¡Lo Mejor en Deportes para Ti!
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {productosDeportes.map((producto, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border 0.2s ease-in-out",
              border: "2px solid #007bff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.border = "2px solid #28a745";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.border = "2px solid #007bff";
            }}
          >
            {/* <img // Comentado para quitar la imagen
              src={producto.img}
              alt={producto.nombre}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "contain",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            /> */}
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#555" }}>
              {producto.nombre}
            </h3>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#e44d26" }}>
              {producto.precio}
            </p>
            <p style={{ fontSize: "0.9rem", color: "green", fontWeight: "bold" }}>
              {producto.envio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modulo9;