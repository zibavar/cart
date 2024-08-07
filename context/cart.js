import { createContext ,useReducer} from 'react';
import Cookies from 'js-cookie'
 export const CartContext = createContext()
const initialState ={
    cart : Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {cartItems :[]}
}

function reducer  (state,action){
  switch (action.type)
  {
    case 'ADD_ITEMS': {
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
    default :
    return state
  }
   
}

 export function CartContextProvider ({children}){
    const [state , dispatch] = useReducer (reducer , initialState) 
    const value = {state,dispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

 
