import { Col, Row } from "react-bootstrap";

export const Header = ({ name, uf }) => {
  return (
    <Row>
      <Col md={6} className="mb-3 fs-3 fw-bold text-light">
        {`Previsão do tempo ${name} - ${uf}`}
      </Col>
      <Col md={6} className="mb-3 fs-3 fw-bold text-light text-end">
        Próximos 6 dias
      </Col>
    </Row>
  );
};
