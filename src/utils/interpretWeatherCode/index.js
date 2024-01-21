import { toLowerCase } from "../toLowerCase";

/**
 * Interpreta um código de sigla climática e retorna a descrição correspondente da condição meteorológica.
 *
 * @function
 * @param {string} acronym - A sigla climática a ser interpretada.
 * @returns {string} - A descrição da condição meteorológica correspondente à sigla fornecida.
 *
 * @example
 * const weatherDescription = interpretWeatherCode('pc');
 * // Resultado: "Pancadas de Chuva"
 *
 * @example
 * const weatherDescription = interpretWeatherCode('n');
 * // Resultado: "Nublado"
 *
 * @example
 * const weatherDescription = interpretWeatherCode('xyz');
 * // Resultado: "Condição meteorológica não reconhecida"
 */
const interpretWeatherCode = (acronym) => {
    acronym = toLowerCase(acronym)

    switch (acronym) {
        case "ec":
            return "Encoberto com Chuvas Isoladas";
        case "ci":
            return "Chuvas Isoladas";
        case "c":
            return "Chuva";
        case "in":
            return "Instável";
        case "pp":
            return "Possibilidade de Pancadas de Chuva";
        case "cm":
            return "Chuva pela Manhã";
        case "cn":
            return "Chuva a Noite";
        case "pt":
            return "Pancadas de Chuva a Tarde";
        case "pm":
            return "Pancadas de Chuva pela Manhã";
        case "np":
            return "Nublado e Pancadas de Chuva";
        case "pc":
            return "Pancadas de Chuva";
        case "pn":
            return "Parcialmente Nublado";
        case "cv":
            return "Chuvisco";
        case "ch":
            return "Chuvoso";
        case "t":
            return "Tempestade";
        case "ps":
            return "Predomínio de Sol";
        case "e":
            return "Encoberto";
        case "n":
            return "Nublado";
        case "cl":
            return "Céu Claro";
        case "nv":
            return "Nevoeiro";
        case "g":
            return "Geada";
        case "ne":
            return "Neve";
        case "nd":
            return "Não Definido";
        case "pnt":
            return "Pancadas de Chuva a Noite";
        case "psc":
            return "Possibilidade de Chuva";
        case "pcm":
            return "Possibilidade de Chuva pela Manhã";
        case "pct":
            return "Possibilidade de Chuva a Tarde";
        case "pcn":
            return "Possibilidade de Chuva a Noite";
        case "npt":
            return "Nublado com Pancadas a Tarde";
        case "npn":
            return "Nublado com Pancadas a Noite";
        case "ncn":
            return "Nublado com Possibilidade de Chuva a Noite";
        case "nct":
            return "Nublado com Possibilidade de Chuva a Tarde";
        case "ncm":
            return "Nublado com Possibilidade de Chuva pela Manhã";
        case "npm":
            return "Nublado com Pancadas pela Manhã";
        case "npp":
            return "Nublado com Possibilidade de Chuva";
        case "vn":
            return "Variação de Nebulosidade";
        case "ct":
            return "Chuva a Tarde";
        case "ppn":
            return "Possibilidade de Pancadas de Chuva a Noite";
        case "ppt":
            return "Possibilidade de Pancadas de Chuva a Tarde";
        case "ppm":
            return "Possibilidade de Pancadas de Chuva pela Manhã";
        default:
            return "Condição meteorológica não reconhecida";
    }
}

export { interpretWeatherCode }