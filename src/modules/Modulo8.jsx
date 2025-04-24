import React from "react";
// import producto1 from "../../public/tecnologia1.jpg"; // Comentado
// import producto2 from "../../public/tecnologia2.jpg"; // Comentado
// import producto3 from "../../public/tecnologia3.jpg"; // Comentado
// import producto4 from "../../public/tecnologia4.jpg"; // Comentado
// import producto5 from "../../public/tecnologia5.jpg"; // Comentado

const productosTecnologicos = [
  {
    nombre: "Smartphone de Última Generación",
    precio: "$1.200.000",
    envio: "Envío Rápido",
  },
  {
    nombre: "Laptop Ultrabook Delgada",
    precio: "$2.500.000",
    envio: "¡Envío GRATIS!",
  },
  {
    nombre: "Smartwatch Deportivo",
    precio: "$350.000",
    envio: "Envío Estándar",
  },
  {
    nombre: "Auriculares Inalámbricos Premium",
    precio: "$480.000",
    envio: "¡Envío GRATIS! FULL",
  },
  {
    nombre: "Tablet de 10 Pulgadas",
    precio: "$800.000",
    envio: "Envío Rápido",
  },
  {
    nombre: "Teclado Mecánico RGB",
    precio: "$220.000",
    envio: "¡Envío GRATIS!",
  },
  {
    nombre: "Mouse Gamer de Alta Precisión",
    precio: "$150.000",
    envio: "Envío Estándar",
  },
  {
    nombre: "Monitor 4K UHD",
    precio: "$950.000",
    envio: "¡Envío GRATIS! FULL",
  },
  {
    nombre: "Impresora Multifuncional",
    precio: "$550.000",
    envio: "Envío Rápido",
  },
  {
    nombre: "Cámara Mirrorless Avanzada",
    precio: "$3.200.000",
    envio: "¡Envío GRATIS!",
  },
  {
    nombre: "Disco Duro Externo 2TB",
    precio: "$180.000",
    envio: "Envío Estándar",
  },
  {
    nombre: "Router WiFi de Doble Banda",
    precio: "$280.000",
    envio: "¡Envío GRATIS! FULL",
  },
];

const Modulo8 = () => {
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
        ¡Descubre lo Último en Tecnología!
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {productosTecnologicos.map((producto, index) => (
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
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border 0.2s ease-in-out",
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
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#e44d26",
              }}
            >
              {producto.precio}
            </p>
            <p
              style={{ fontSize: "0.9rem", color: "green", fontWeight: "bold" }}
            >
              {producto.envio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modulo8;
