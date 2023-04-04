import { cartActions } from "./cart-slice";
import axios from 'axios';

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchHandler = async () => {
//       const {data} = await axios.get('http://127.0.0.1:8000/api/cart_get_post')
//       return data;
//     };

//     const mapToCart = (cart) => {

//     }

//     try {
//       const cartData = await fetchHandler();
//       console.log(cartData);
//       dispatch(cartActions.replaceData(cartData));
//     } catch (err) {

//         console.log(err)
//     //   dispatch(
//     //     uiActions.showNotification({
//     //       open: true,
//     //       message: "Sending Request Failed",
//     //       type: "error",
//     //     })
//     //   );
//     }
//   };
// };

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     open: true,
    //     message: "Sending Request To Database!",
    //     type: "warning",
    //   })
    // );
    const sendRequest = async () => {
      // Send state as Sending request

      const {data} = await axios.post(
        "http://127.0.0.1:8000/api/cart_get_post", cart);
    //   const data = await res.json();
      // Send state as Request is successful
      console.log('posted successfully');
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};