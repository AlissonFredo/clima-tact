import { Col, Placeholder, Row } from "react-bootstrap";

export const HeaderPlaceholder = () => {
  return (
    <Row>
      <Col md={6} className="mb-3 fs-3 text-light">
        <Placeholder xs={8} size="lg" />
      </Col>
      <Col md={6} className="mb-3 text-end fs-3 text-light">
        <Placeholder xs={6} size="lg" />
      </Col>
    </Row>
  );
};
