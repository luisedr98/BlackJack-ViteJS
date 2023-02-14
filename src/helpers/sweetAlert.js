import Swal from 'sweetalert2'

/**
 * Funcion que envia la alerta del ganador
 * @param {String} mensaje acerca de quien ganó el juego
 * @returns {Promise} determina el estado de la alerta
 */

const swAlerta = mensaje => Swal.fire("¡Ganador!", mensaje ,'info');

export default swAlerta