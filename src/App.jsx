import { useState } from "react";
import { getCityData, getWeatherForecastNextSevenDays } from "./services/cptec";

const App = () => {
  const [city, setCity] = useState("");

  const [weatherNextSevenDays, setWeatherNextSevenDays] = useState();

  console.log(weatherNextSevenDays);

  const capitais = [
    { description: "Selecione uma opção", value: "" },
    { description: "Brasília", value: "brasilia" },
    { description: "Rio de Janeiro", value: "rio de janeiro" },
    { description: "São Paulo", value: "sao paulo" },
    { description: "Belo Horizonte", value: "belo horizonte" },
    { description: "Porto Alegre", value: "porto alegre" },
    { description: "Salvador", value: "salvador" },
    { description: "Recife", value: "recife" },
    { description: "Curitiba", value: "curitiba" },
    { description: "Fortaleza", value: "fortaleza" },
    { description: "Manaus", value: "manaus" },
    { description: "Belém", value: "belem" },
    { description: "Goiânia", value: "goiania" },
    { description: "Cuiabá", value: "cuiaba" },
    { description: "Campo Grande", value: "campo grande" },
    { description: "Natal", value: "natal" },
    { description: "João Pessoa", value: "joao pessoa" },
    { description: "Vitória", value: "vitoria" },
    { description: "Aracaju", value: "aracaju" },
    { description: "Florianópolis", value: "florianopolis" },
    { description: "Maceió", value: "maceio" },
    { description: "Teresina", value: "teresina" },
    { description: "Palmas", value: "palmas" },
    { description: "Boa Vista", value: "boa vista" },
    { description: "Rio Branco", value: "rio branco" },
  ];

  const handleFindWeatherForecast = async () => {
    if (!city) return;

    const dataCity = await getCityData(city);

    if (!dataCity) return;

    const dataWeatherNextSevenDays = await getWeatherForecastNextSevenDays(
      dataCity.id
    );

    setWeatherNextSevenDays(dataWeatherNextSevenDays);
  };

  return (
    <div>
      <h1>Hello Word</h1>

      <div>
        <label htmlFor="capitais">Escolha uma capital:</label>
        <select id="capitais" onChange={(e) => setCity(e.target.value)}>
          {capitais.map((capital, index) => (
            <option key={index} value={capital.value}>
              {capital.description}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={handleFindWeatherForecast}>Buscar</button>
      </div>
    </div>
  );
};

export default App;
