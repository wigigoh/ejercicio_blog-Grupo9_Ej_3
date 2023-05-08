/**
 * Colocar aquí JS "propio".
 * Notar que este código se ejecutará en el navegador.
 */
const { format } = require("date-fns");

function formatDate(date) {
  format(new Date(date), "dd 'de' MMMM','  yyyy");
}

module.exports = { formatDate };
