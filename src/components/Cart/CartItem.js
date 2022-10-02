import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'
import {dataCartActions} from './../store/cartData-Slice'

const CartItem = (props) => {

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(dataCartActions.addItemToCart({
      id:props.id,
      price: props.price,
      title: props.title,
      description: props.description
  }))

  }

  const removeItemHandler = () => {
    dispatch(dataCartActions.removeItemFromCart({
      id: props.id
    }))

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice}{' '}
          <span className={classes.itemprice}>(${props.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
