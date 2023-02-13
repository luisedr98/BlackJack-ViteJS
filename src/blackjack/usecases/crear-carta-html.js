
/**
 * 
 * @param {String} carta Valor de la carta obtenido en el deck
 * @returns {HTMLImageElement} imagen de la carta creada
 */


export const crearCartaHTML = (carta) => {
    const cartaImg = document.createElement("img");
    cartaImg.src = `/assets/cartas/${carta}.png`;
    cartaImg.classList.add("imagen");
    cartaImg.alt = "cartas";
    return cartaImg;
  };
  