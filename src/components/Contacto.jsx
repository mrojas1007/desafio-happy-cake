import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const Contacto = () => {
  return (
    <Container>
      <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textarea">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" placeholder="" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
