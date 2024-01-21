import { Col, Placeholder, Row } from "react-bootstrap";
import { getWeatherImageByCode } from "../../utils/getWeatherImageByCode";
import { interpretWeatherCode } from "../../utils/interpretWeatherCode";

export const CardWeatherPlaceholder = ({ isActive }) => {
  const positions = [0, 1, 2, 3, 4, 5];

  return (
    <Row>
      {!isActive &&
        positions.map((position, key) => {
          return (
            <Col md={true} sm={12} key={key} className="mb-3 mb-md-0">
              <div className="d-flex flex-column h-100">
                <div className="bg-light text-dark p-2 rounded-3 flex-grow-1">
                  <div>
                    <h4 className="text-center text-muted">
                      <Placeholder lg={12} />
                    </h4>
                  </div>
                  <div className="text-center text-muted">
                    <Placeholder xs={12} />
                  </div>
                  <div className="text-center">
                    <img
                      className="img-fluid w-50"
                      src={getWeatherImageByCode("")}
                      alt={interpretWeatherCode("")}
                    />
                  </div>
                  <div className="text-center text-muted">
                    <Placeholder xs={12} />
                  </div>
                  <div className="text-center text-muted">
                    <span className="">
                      <Placeholder xs={5} />
                    </span>
                    <span> / </span>
                    <span>
                      <Placeholder xs={5} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
    </Row>
  );
};
