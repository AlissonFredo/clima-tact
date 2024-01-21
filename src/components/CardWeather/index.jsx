import { Col } from "react-bootstrap";
import { displayShortDate, getWeekDayName } from "../../utils/date";
import { getWeatherImageByCode } from "../../utils/getWeatherImageByCode";
import { interpretWeatherCode } from "../../utils/interpretWeatherCode";

export const CardWeather = ({ value, key }) => {
  return (
    <Col key={key} md={true} sm={12} className="mb-3 mb-md-0">
      <div className="d-flex flex-column h-100">
        <div className="bg-light text-dark p-2 rounded-3 flex-grow-1">
          <div>
            <h4 className="text-center">{getWeekDayName(value.dia)}</h4>
          </div>
          <div className="text-center">{displayShortDate(value.dia)}</div>
          <div className="text-center">
            <img
              className="img-fluid w-50"
              src={getWeatherImageByCode(value.tempo)}
              alt={interpretWeatherCode(value.tempo)}
            />
          </div>
          <div className="text-center">{interpretWeatherCode(value.tempo)}</div>
          <div className="text-center">
            <span className="text-primary fw-bold">{`${value.minima}°`}</span>
            <span> / </span>
            <span className="text-danger fw-bold">{`${value.maxima}°`}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};
