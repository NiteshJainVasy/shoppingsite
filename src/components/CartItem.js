import './cartItem.css'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';

function CartItems({id, image, title, price, notify,quantity=0}) {
  const dispatch = useDispatch()
  const Swal = require('sweetalert2')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const cart = useSelector((state) => state.cart)

  const NoOfquantity = (id, title) => {
    cart && cart.map((item, index) =>{
if (id == item.id && title == item.title){
quantity = item.quantity
}
  });
return quantity;
 }

  return (
 
    <div className="cartItem"  hidden={NoOfquantity(id ,title) ===0 ? true : false}>
      <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

   {NoOfquantity(id ,title)===15?  
          <Modal show={show}       size="sm"  autoFocus  ={true} aria-labelledby="example-modal-sizes-title-sm" onHide={handleClose}>
         <Modal.Body closeButton>you are Added maximum limit</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

:""}
<ToastContainer Type ="success" />

<div className='cartItem__incrDec'>
<button onClick={() => dispatch(decrementQuantity(id))}>-</button>

<p>{NoOfquantity(id ,title)  }</p> 

<button onClick={() => {dispatch(incrementQuantity(id)); handleShow() } }>+</button>
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
            notify();
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