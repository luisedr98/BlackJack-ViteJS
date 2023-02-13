import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposCartas Ejemplo ["C", "D", "H", "S"]
 * @param {Array<String>} cartasEspeciales Ejemplo ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo de deck de cartas
 */

export const crearDeck = (tiposCartas, cartasEspeciales) => {

    if(!tiposCartas || tiposCartas.length === 0) throw Error('tiposCartas es obligatorio');
    if(!cartasEspeciales || cartasEspeciales.length === 0) throw Error('tiposCartas es obligatorio');


    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of cartasEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
};
