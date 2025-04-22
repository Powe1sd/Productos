import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const categorias = [
  {
    title: "Tecnología",
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
  {
    title: "Hogar y cocina",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    title: "Moda",
    img: "https://cdn-icons-png.flaticon.com/512/947/947384.png",
  },
  {
    title: "Juguetes",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995471.png",
  },
  {
    title: "Deportes",
    img: "https://cdn-icons-png.flaticon.com/512/1024/1024720.png",
  },
  {
    title: "Herramientas",
    img: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
  },
];

const Seccion3 = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Categorías populares</h2>
      <Row>
        {categorias.map((item, index) => (
          <Col key={index} md={4} lg={2} className="mb-4">
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: 60 }}
                  className="mb-3"
                />
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Seccion3;
