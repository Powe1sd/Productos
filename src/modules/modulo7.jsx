import React from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para la validación de props

// Componente para mostrar la información individual de un producto
const Modulo7Item = ({ product }) => {
  return (
    <div
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
        src={product.img}
        alt={product.nombre}
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
        {product.nombre}
      </h3>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#e44d26" }}>
        {product.precio}
      </p>
      {product.descuento && (
        <p style={{ fontSize: "0.9rem", color: "orange", fontWeight: "bold" }}>
          Descuento: {product.descuento}
        </p>
      )}
      <p style={{ fontSize: "0.9rem", color: "green", fontWeight: "bold" }}>
        {product.envio}
      </p>
      {product.detalles && (
        <button
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
          onClick={() =>
            alert(`Detalles de ${product.nombre}: ${product.detalles}`)
          }
        >
          Ver Detalles
        </button>
      )}
    </div>
  );
};

// Validamos la estructura esperada de cada producto
Modulo7Item.propTypes = {
  product: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    envio: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descuento: PropTypes.string,
    detalles: PropTypes.string,
  }).isRequired,
};

// Componente principal para la lista de productos (renombrado a Modulo7)
const Modulo7 = ({ products, title }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        margin: "20px 0",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
            textAlign: "center",
          }}
        >
          {title}
        </h2>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product, index) => (
          <Modulo7Item key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

// Validamos la estructura esperada de los props del Modulo7
Modulo7.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
      envio: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      descuento: PropTypes.string,
      detalles: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Modulo7;
