import { createContext ,useReducer} from 'react';
import Cookies from 'js-cookie';
 export const Store = createContext()
const initialState ={
    cart : Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {cartItems :[] ,shippingData:{} },
}

function reducer  (state,action){
  switch (action.type)
  {
    case 'ADD_TO_CART': {
      const newItem = action.payload

      const existingItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug)

      const cartItems = existingItem ? state.cart.cartItems.map((item) =>item.title === existingItem.title ? newItem:item) 
      : [...state.cart.cartItems,newItem] 
      Cookies.set('cart' , JSON.stringify({...state.cart,cartItems}))
      return {...state,cart :{...state.cart,cartItems}}

    }
 
    case 'REMOVE_ITEMS' :{
      const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug)
      Cookies.set('cart' , JSON.stringify({...state.cart,cartItems}))
      return {...state,cart :{...state.cart,cartItems}}
    }
    case 'UPDATE_QUANTITY':{
     const cartItems= state.cart.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          :  item
        )
        Cookies.set('cart' , JSON.stringify({...state.cart,cartItems}))
      return {...state,cart :{...state.cart,cartItems}}
    }
 
   



    case 'SAVE_SHIPPING_DATA':
      return {
        ...state,
        cart :{
          ...state.cart,
          shippingData :
          {
            ...state.cart.shippingData,
            ...action.payload
          },
        },
      }
      case 'SAVE_PAYMENT_METHOD':
        return{
          ...state,
          cart :{
            ...state.cart,
            paymentMethod :action.payload
          }
        }
        
      

    default :
    return state
  }
   
}

 export function StoreProvider ({children}){
    const [state , dispatch] = useReducer (reducer , initialState) 
    const totalPrice = state.cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    const value = {state,dispatch,totalPrice}
    return <Store.Provider value={value}>{children}</Store.Provider>
}

 
