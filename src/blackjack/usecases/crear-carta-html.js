
/**
 * 
 * @param {String} carta Valor de la carta obtenido en el deck
 * @returns {HTMLImageElement} imagen de la carta creada
 */


export const crearCartaHTML = (carta) => {
    if(!carta) throw Error('El argumento carta es obligatorio');
    
    const cartaImg = document.createElement("img");
    cartaImg.src = `/BlackJack-ViteJS/assets/cartas/${carta}.png`;
    cartaImg.classList.add("imagen");
    cartaImg.alt = "cartas";
    return cartaImg;
  };
  