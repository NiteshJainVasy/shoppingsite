import './total.css'
import {useSelector} from 'react-redux'

function TotalShopping() {
  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }


  return (
    <div className="total">
  <h2>ORDER SUMMARY</h2>
    <div>
        <p className="total__p">
  Total ({getTotal().totalQuantity} Items) 
  : <strong>&#8377; {getTotal().totalPrice}</strong>
</p>
      </div>
    </div>
  )
}

export default TotalShopping