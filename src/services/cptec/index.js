import axios from "axios";
import { isArray } from "../../utils/isArray";
import convertXmlToJson from "../../utils/convertXmlToJson";
import { toLowerCase } from '../../utils/toLowerCase'
import { removeAccents } from '../../utils/removeAccents'

/**
 * Obtém informações da cidade a partir do serviço web do CPTEC/INPE.
 *
 * @async
 * @function
 * @param {string} city - O nome da cidade para obter informações.
 * @returns {Promise<Object|null>} - Uma Promise que resolve para um objeto contendo as informações da cidade
 *                                   ou null se ocorrer um erro durante a busca.
 *
 * @throws {Error} - Lança um erro se houver algum problema durante a execução.
 *
 * @example
 * const cityData = await getCityData('Sao Paulo');
 * // Resultado: { id: '123', nome: 'São Paulo', uf: 'SP' }
 */
const getCityData = async (city) => {
    try {
        city = toLowerCase(city);
        city = removeAccents(city);

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

/**
 * Obtém a previsão do tempo para os próximos sete dias de uma cidade específica.
 *
 * @async
 * @function
 * @param {string} cityId - O identificador único da cidade para obter a previsão do tempo.
 * @returns {Promise<Object|null>} - Uma Promise que resolve para um objeto contendo informações da previsão do tempo
 *                                   para os próximos sete dias ou null se ocorrer um erro durante a busca.
 *
 * @throws {Error} - Lança um erro se houver algum problema durante a execução.
 *
 * @example
 * const weatherForecast = await getWeatherForecastNextSevenDays('123');
 * // Resultado: {
 * //   atualizacao: '2022-01-20T12:00:00Z',
 * //   nome: 'São Paulo',
 * //   uf: 'SP',
 * //   previsao: [
 * //     { dia: '2022-01-21', iuv: '5', maxima: '30', minima: '20', tempo: 'Ensolarado' },
 * //     { dia: '2022-01-22', iuv: '4', maxima: '28', minima: '18', tempo: 'Nublado' },
 * //     // ... (para os próximos cinco dias)
 * //   ]
 * // }
 */
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