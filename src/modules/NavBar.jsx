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
            {/* ... el resto de tu navegación ... */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MeliNavbar;
