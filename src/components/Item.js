import './item.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {useNavigate} from 'react-router-dom'

function Items({id, title, image, price,quantity=0}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const notify = () => toast("Product Added Successfully!");
  const limited = () => toast("Product Added Successfully!");
   const NumberList = (id, title) => {
      cart && cart.map((item, index) =>{
if (id == item.id && title == item.title){
  quantity = item.quantity
}
    });
return quantity;
   }

  
return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      
        <ToastContainer Type ="success" />
   

          {NumberList(id ,title)===15?  
          <Modal show={show}       size="sm"  autoFocus  ={true} aria-labelledby="example-modal-sizes-title-sm" onHide={handleClose}>
    
        <Modal.Body closeButton>you are Added maximum limit</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

:""}  

      
{
  NumberList(id ,title)===0?
  <button 
  onClick={() =>{
    dispatch(addToCart({
      id, title, image, price
    }));
    notify();
   }
  }>Add to Cart
</button>
  :
  <div className='cartItem__incrDec'>
  <button onClick={() => dispatch(decrementQuantity(id)) }>-</button>
<p>{NumberList(id ,title)  }</p> 
<button onClick={() => {dispatch(incrementQuantity(id)); handleShow() } }>+</button>
 </div> 
}







</div>
  )
}
export default Items






