import './cartItem.css'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

function CartItems({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()
  const Swal = require('sweetalert2')
  
  
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
       
          onClick={() => 
          
Swal.fire({
          title: 'Are you sure you want  to remove this product?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Yes',
          denyButtonText: 'No',
          customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
          }
        }).then((result) => {
          if (result.isConfirmed) {
             Swal.fire('Saved!', '', 'success')
            dispatch(removeItem(id))
          } 
        })
}
              >
            Remove
        </button>
      </div>                   
    </div>
  )
}

export default CartItems