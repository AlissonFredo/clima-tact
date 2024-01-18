import axios from "axios";
import { isArray } from "../../utils/isArray";
import convertXmlToJson from "../../utils/convertXmlToJson";

const getCityData = async (city) => {
    try {
        const response = await axios.get(
            `http://servicos.cptec.inpe.br/XML/listaCidades?city=${city}`
        );

        const { cidades } = convertXmlToJson(response.data);

        if (isArray(cidades.cidade)) {
            return {
                id: cidades.cidade[0].id?._text,
                nome: cidades.cidade[0].nome?._text,
                uf: cidades.cidade[0].uf?._text
            };
        }

        return {
            id: cidades.cidade.id?._text,
            nome: cidades.cidade.nome?._text,
            uf: cidades.cidade.uf?._text
        };
    } catch (error) {
        console.error('Erro ao obter informações da cidade:', error);
        return null;
    }
}

const getWeatherForecastNextSevenDays = async (cityId) => {
    try {
        const response = await axios.get(
            `http://servicos.cptec.inpe.br/XML/cidade/7dias/${cityId}/previsao.xml`
        );

        const { cidade } = convertXmlToJson(response.data);

        return {
            atualizacao: cidade.atualizacao._text,
            nome: cidade.nome._text,
            uf: cidade.uf._text,
            previsao: cidade.previsao.map(previsao => {
                return {
                    dia: previsao.dia._text,
                    iuv: previsao.iuv._text,
                    maxima: previsao.maxima._text,
                    minima: previsao.minima._text,
                    tempo: previsao.tempo._text
                }
            })
        }
    } catch (error) {
        console.error('Erro ao obter informações dos próximos 7 dias:', error);
        return null;
    }
}

export { getCityData, getWeatherForecastNextSevenDays }