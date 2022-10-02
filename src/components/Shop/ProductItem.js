import Card from '../UI/Card';

import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import {dataCartActions} from './../../components/store/cartData-Slice'



const ProductItem = (props) => {

  const dispatchAdd = useDispatch()
const addItemHandler = () => {
  dispatchAdd(dataCartActions.addItemToCart({
    id:props.id,
    price: props.price,
    title: props.title,
    description: props.description
  }))

}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
