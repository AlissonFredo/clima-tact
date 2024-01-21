/**
 * Obtém o nome completo do dia da semana para uma data específica.
 * @param {string} day - Uma string representando a data no formato 'YYYY-MM-DD'.
 * @returns {string} - O nome completo do dia da semana.
 * @example
 * const nameDay = getWeekDayName('2024-01-20');
 * // Retorna 'Sábado' para a data '2024-01-20'.
 */
const getWeekDayName = (day) => {
    const date = new Date(`${day}T00:00:00Z`);

    const daysWeek = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];

    return daysWeek[date.getUTCDay()];
};

/**
 * Adiciona um zero à esquerda se o número for menor que 10.
 *
 * @param {number} number - O número a ser formatado.
 * @returns {string|number} - O número formatado, como uma string com zero à esquerda se necessário.
 *
 * @example
 * const result = addZero(5);
 * // Resultado: "05"
 *
 * @example
 * const result = addZero(15);
 * // Resultado: 15 (sem alteração, pois é maior ou igual a 10)
 */
const addZero = (number) => {
    return number < 10 ? "0" + number : number;
};

/**
 * Formata um dia como uma string no formato "DD MêsAbreviado".
 *
 * @param {string} day - A data no formato "YYYY-MM-DD".
 * @returns {string} - A data formatada como "DD MêsAbreviado".
 *
 * @example
 * const formattedDate = displayShortDate("2022-01-20");
 * // Resultado: "20 jan."
 *
 * @example
 * const formattedDate = displayShortDate("2022-12-05");
 * // Resultado: "05 dez."
 */
const displayShortDate = (day) => {
    const date = new Date(`${day}T00:00:00Z`);

    const months = [
        "jan.",
        "fev.",
        "mar.",
        "abr.",
        "mai",
        "jun.",
        "jul.",
        "ago.",
        "set.",
        "out.",
        "nov.",
        "dez.",
    ];

    const newDay = addZero(date.getUTCDate());

    const monthAbbreviated = months[date.getUTCMonth()];

    return `${newDay} ${monthAbbreviated}`;
};

export { getWeekDayName, displayShortDate }
