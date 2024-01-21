import { useState } from "react";
import {
  getCityData,
  getWeatherForecastNextSevenDays,
} from "../../services/cptec";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { CAPITALS } from "../../constants/capitals";
import { InputDataList } from "../../components/InputDataList";
import { ButtonCustom } from "../../components/ButtonCustom";
import { CardWeather } from "../../components/CardWeather";
import { CardWeatherPlaceholder } from "../../components/CardWeatherPlaceholder";
import { Header } from "../../components/Header";
import { HeaderPlaceholder } from "../../components/HeaderPlaceholder";

const App = () => {
  const [city, setCity] = useState("");

  const [weatherNextSevenDays, setWeatherNextSevenDays] = useState();

  const [loading, setLoading] = useState(false);

  const handleFindWeatherForecast = async () => {
    if (!city) return;
    setLoading(true);

    const dataCity = await getCityData(city);

    if (!dataCity) return;

    const dataWeatherNextSevenDays = await getWeatherForecastNextSevenDays(
      dataCity.id
    );

    setWeatherNextSevenDays(dataWeatherNextSevenDays);
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <Navbar className="mb-4 bg-orange">
        <Container>
          <Navbar.Brand className="text-light fw-bold" href="#">
            ClimaTact
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className="mb-4">
          <Col md={8}>
            <InputDataList
              value={city}
              placeholder="Escolher uma capital"
              name="capitais"
              onChange={(e) => setCity(e.target.value)}
              size="lg"
              options={CAPITALS}
            />
          </Col>
          <Col md={4}>
            <ButtonCustom
              title="Buscar"
              size="lg"
              isLoading={loading}
              className="w-100 btn-orange"
              onClick={handleFindWeatherForecast}
            />
          </Col>
        </Row>

        {weatherNextSevenDays && (
          <Header
            name={weatherNextSevenDays.nome}
            uf={weatherNextSevenDays.uf}
          />
        )}

        {!weatherNextSevenDays && <HeaderPlaceholder />}

        <Row>
          {weatherNextSevenDays &&
            weatherNextSevenDays.previsao.map((obj, key) => (
              <CardWeather key={key} value={obj} />
            ))}
        </Row>

        <CardWeatherPlaceholder isActive={weatherNextSevenDays} />
      </Container>
    </div>
  );
};

export default App;
