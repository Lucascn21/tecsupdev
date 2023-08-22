/**
 * Suma dos números y devuelve el resultado.
 *
 * @param {number} num1 - El primer número a sumar.
 * @param {number} num2 - El segundo número a sumar.
 * @returns {number} El resultado de la suma.
 */
const sumar = (num1, num2) => {
  return num1 + num2;
};

/**
 * Calcula la distancia recorrida por un móvil en un MRU.
 *
 * @param {number} velocidad - La velocidad constante del móvil en m/s.
 * @param {number} tiempo - El tiempo en segundos durante el cual se mueve el móvil.
 * @returns {number} La distancia recorrida en metros.
 */
const calcDistanciaRecorrida = (velocidad, tiempo) => {
  return velocidad * tiempo;
};

/**
 * Calcula el promedio de tres notas parciales. Si el promedio es mayor a 4, deberá mostrar por consola que aprobó.
 *
 * @param {number} nota1 - La primera nota parcial.
 * @param {number} nota2 - La segunda nota parcial.
 * @param {number} nota3 - La tercera nota parcial.
 * @returns {number} El promedio de las notas.
 */
const calcPromedio = (nota1, nota2, nota3) => {
  let sumNotas = nota1 + nota2 + nota3;
  let promedio = sumNotas / 3;
  if (promedio > 4) console.dir("Aprobó");
  return (nota1 + nota2 + nota3) / 3;
};

/**
 * Calcula el puntaje de respuestas de un postulante. Por cada respuesta correcta tendrá 4 puntos, respuestas
incorrectas tendrá -1 y respuestas en blanco tendrá 0.
 *
 * @param {number} correctas - Número de respuestas correctas.
 * @param {number} incorrectas - Número de respuestas incorrectas.
 * @param {number} enBlanco - Número de respuestas en blanco.
 * @returns {number} El puntaje total del postulante.
 */
const calcPuntajeRespuestas = (correctas, incorrectas, enBlanco) => {
  totalRespuestas = correctas + incorrectas + enBlanco;
  return (correctas * 4 + incorrectas * -1) / totalRespuestas;
};

/**
 * Calcula el puntaje total de un equipo en un torneo. Teniendo en cuenta que por cada partido ganado
obtendrá 3 puntos, empatado 1 punto y perdido 0 puntos
 *
 * @param {number} ganados - Número de partidos ganados.
 * @param {number} perdidos - Número de partidos perdidos.
 * @param {number} empatados - Número de partidos empatados.
 * @returns {number} El puntaje total del equipo.
 */
const calcPuntajeEquipos = (ganados, perdidos, empatados) => {
  return ganados * 3 + empatados;
};

module.exports = {
  sumar,
  calcDistanciaRecorrida,
  calcPromedio,
  calcPuntajeEquipos,
  calcPuntajeRespuestas,
};
