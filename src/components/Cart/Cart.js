import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/exports';
const Cart = (props) => {
  const items = useSelector(state => state.dataCart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items.map(item => 
      <CartItem 
      id = {item.id}
      key ={item.id}
      title={item.title}
      quantity={item.quantity}
      totalPrice ={item.totalPrice}
      price= {item.price}
      />)}
      </ul>
    </Card>
  );
};

export default Cart;
