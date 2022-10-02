import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {showCartActions} from './../../components/store/showCart-Slice'


const CartButton = (props) => {
  const total =useSelector(state => state.dataCart.items.reduce((acc,item) => {
    return acc + item.quantity 
  },0))
  const dispatchShowCart = useDispatch();
    
  const showCartHandler =() => {
    dispatchShowCart(showCartActions.toggleShowCart())
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
