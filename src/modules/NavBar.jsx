import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MeliNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "yellow", minHeight: "80px" }}
      className="py-0"
    >
      <Container fluid className="px-md-4 d-flex flex-column">
        {/* Parte superior: Logo y Buscador */}
        <div className="d-flex align-items-center mb-2">
          <Navbar.Brand href="#" className="me-md-3">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_866208-MLA71784981947_092023-O.webp"
              height="30"
              alt="Mercado Libre"
            />
          </Navbar.Brand>
          <Form className="d-flex flex-grow-1 me-md-2">
            <FormControl
              type="search"
              placeholder="Buscar productos, marcas."
              className="rounded-pill"
              aria-label="Buscar"
              style={{
                backgroundColor: "white",
                borderColor: "transparent",
              }}
            />
            <Button
              variant="light"
              className="rounded-pill ms-2"
              style={{ borderColor: "transparent" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
          {/* Espacio para elementos adicionales en la parte superior derecha si los hubiera */}
        </div>

        {/* Parte inferior: Navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto align-items-center"
            style={{ fontSize: "0.9rem" }}
          >
            <div className="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span>Envio</span>
            </div>
            <Nav.Link href="#categorias" className="me-2">
              Categorías
            </Nav.Link>
            <Nav.Link href="#ofertas" className="me-2">
              Ofertas
            </Nav.Link>
            <Nav.Link href="#cupones" className="me-2">
              Cupones
            </Nav.Link>
            <Nav.Link href="#productos" className="me-2">
              Productos
            </Nav.Link>
            <Nav.Link href="#moda" className="me-2">
              Moda
            </Nav.Link>
            <Nav.Link href="#mercado-play" className="me-2">
              Gorras
            </Nav.Link>
            <Nav.Link href="#vender" className="me-2">
              Camisas
            </Nav.Link>
            <Nav.Link href="#ayuda" className="me-2">
              Ayuda
            </Nav.Link>
            <Nav.Link href="#notificaciones" className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7a5 5 0 0 0-6.005-4.901z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#carrito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.595 6.423A.5.5 0 0 1 14 9H2.166l-.81-3.243a.5.5 0 0 1-.037-.592V1.5a.5.5 0 0 1 .5-.5zM16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MeliNavbar;
