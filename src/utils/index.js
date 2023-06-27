
/**
* This function Calculate the total price of a new order
* @param {Array} products cart Product: Array of Objects
* @returns {Number} Total Price
*/
export const totalPrice = ( products ) => {
  let sum = 0
  products.forEach( product => sum += product.price )
  return sum
}