import NUBLADO_IMG from "../../assets/períodos_nublados.svg";
import NUBLADOCHUVA_IMG from "../../assets/nublado_chuva.svg";
import CHUVA_IMG from "../../assets/chuva.svg";
import CHUVISCO_IMG from "../../assets/chuva_fraca_2.svg";
import NEVE_IMG from "../../assets/neve.svg";
import SOL_IMG from "../../assets/sol.svg";
import TEMPESTADE_IMG from "../../assets/tempestade.svg";
import { toLowerCase } from "../toLowerCase";

/**
 * Obtém a imagem correspondente a um código de sigla climática.
 *
 * @function
 * @param {string} acronym - A sigla climática para a qual obter a imagem.
 * @returns {string} - O caminho para a imagem correspondente à sigla climática fornecida.
 *
 * @example
 * const weatherImage = getWeatherImageByCode('c');
 * // Resultado: 'caminho/para/imagem/chuva.png'
 *
 * @example
 * const weatherImage = getWeatherImageByCode('n');
 * // Resultado: 'caminho/para/imagem/nublado.png'
 *
 * @example
 * const weatherImage = getWeatherImageByCode('xyz');
 * // Resultado: 'caminho/para/imagem/nublado.png' (imagem padrão para códigos não reconhecidos)
 */
const getWeatherImageByCode = (acronym) => {
    acronym = toLowerCase(acronym);

    switch (acronym) {
        case "ec":
            return CHUVA_IMG;
        case "ci":
            return CHUVA_IMG;
        case "c":
            return CHUVA_IMG;
        case "in":
            return NUBLADO_IMG;
        case "pp":
            return CHUVA_IMG;
        case "cm":
            return CHUVA_IMG;
        case "cn":
            return CHUVA_IMG;
        case "pt":
            return CHUVA_IMG;
        case "pm":
            return CHUVA_IMG;
        case "np":
            return NUBLADOCHUVA_IMG;
        case "pc":
            return CHUVA_IMG;
        case "pn":
            return NUBLADO_IMG;
        case "cv":
            return CHUVISCO_IMG;
        case "ch":
            return CHUVA_IMG;
        case "t":
            return TEMPESTADE_IMG;
        case "ps":
            return SOL_IMG;
        case "e":
            return NUBLADO_IMG;
        case "n":
            return NUBLADO_IMG;
        case "cl":
            return SOL_IMG;
        case "nv":
            return NUBLADO_IMG;
        case "g":
            return NEVE_IMG;
        case "ne":
            return NEVE_IMG;
        case "nd":
            return NUBLADO_IMG;
        case "pnt":
            return CHUVA_IMG;
        case "psc":
            return CHUVA_IMG;
        case "pcm":
            return CHUVA_IMG;
        case "pct":
            return CHUVA_IMG;
        case "pcn":
            return CHUVA_IMG;
        case "npt":
            return NUBLADOCHUVA_IMG;
        case "npn":
            return NUBLADOCHUVA_IMG;
        case "ncn":
            return NUBLADOCHUVA_IMG;
        case "nct":
            return NUBLADOCHUVA_IMG;
        case "ncm":
            return NUBLADOCHUVA_IMG;
        case "npm":
            return NUBLADOCHUVA_IMG;
        case "npp":
            return NUBLADOCHUVA_IMG;
        case "vn":
            return NUBLADO_IMG;
        case "ct":
            return CHUVA_IMG;
        case "ppn":
            return CHUVA_IMG;
        case "ppt":
            return CHUVA_IMG;
        case "ppm":
            return CHUVA_IMG;
        default:
            return NUBLADO_IMG;
    }
};

export { getWeatherImageByCode }