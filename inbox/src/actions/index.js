// export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
// export function fetchProducts() {
//   return async (dispatch) => {
//     const response = await fetch(`http://localhost:8181/api/products`)
//     const json = await response.json()
//     dispatch({
//       type: PRODUCTS_RECEIVED,
//       products: json._embedded.products
//     })
//   }
// }

export const messages = () => {
  return{
    type: 'GET_MESSAGES',
    payload: null
  }
}

export const selected = (message) => {
  return {
    type: 'MESSAGE_SELECTED',
    payload: message
  }
};
