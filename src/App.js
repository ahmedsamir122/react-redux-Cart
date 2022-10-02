import Cart from './components/Cart/Cart';
import React from 'react';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux'
import Notification from './components/UI/Notification';
import {showCartActions} from './components/store/showCart-Slice'
import {dataCartActions} from './components/store/cartData-Slice'

let send = true
function App() {
   const showCart = useSelector(state => state.showCart.showCart)
   const showNotification = useSelector(state => state.showCart.notification)
   const cartItems = useSelector(state => state.dataCart.items)
   const cartChange = useSelector(state => state.dataCart.changed)
   const dispatchAdd = useDispatch()
   
   useEffect(() => {
    const fetchData= async () => {
      const response = await fetch('https://react-test-aefc2-default-rtdb.firebaseio.com/cart.json')
      if(!response.ok){
        throw new Error('fetching data failed')
      }
      const data = await response.json();
      dispatchAdd(dataCartActions.replaceCartItem({
        items:data || []
      }))
      console.log(data)
    }

    fetchData().catch(error => console.log(error.message))
  },[dispatchAdd])
   useEffect(()=>{
     console.log(send)
     if(send){
       send =false;     
       return;
     }
     
     const fetchData = async() => {
       console.log(send)
       dispatchAdd(showCartActions.showNotification({
         status:'pending',
         title: 'sending...',
         message: 'sending cart data'
       }))
       const response =await fetch('https://react-test-aefc2-default-rtdb.firebaseio.com/cart.json',{
         method:'PUT',
         body:JSON.stringify(cartItems),
         headers:{'content-type': 'application/json'}
       })
       if(!response.ok){
         throw new Error('something went wrong')
       }
       const data = await response.json()
       console.log(data)
       dispatchAdd(showCartActions.showNotification({
         status:'success',
         title: 'Success...',
         message: 'sending cart data successfully'
       }))
     }
     
     if(!cartChange)
     return;
     
     fetchData().catch(error => {
       
       dispatchAdd(showCartActions.showNotification({
         status:'error',
         title: 'Error...',
         message: 'sending cart data failed'
       }))
       console.log(error.message)
     });
   },[cartItems, dispatchAdd,cartChange])

  

  return (
    <React.Fragment>
      {showNotification && <Notification status ={showNotification.status} title={showNotification.title} message={showNotification.message}/>}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
    
  );
}

export default App;
