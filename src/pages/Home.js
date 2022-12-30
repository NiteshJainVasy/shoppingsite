import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';

function Home() {

 
  
  const navigate = useNavigate()

const cart = useSelector((state) => state.cart)


const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {

 total += item.quantity
  })
  


  return total  
}






const todoList =[{
  id: 1,
  image: "https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg",
  price: 300,
  quantity: 0,
  title: 
  "Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk"
  },
  {
      id: 2,
      image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      price:29,
      quantity: 0,
      title: 
      "The Lean Startup: How Constant Innovation Create Radically Successful Businesses Paperback"
      },
  
      {
          id: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
          price:199,
          quantity: 0,
          title: 
          "Samsung LC49RG90SSUXEN 49 Curve Led Gaming Monitor"
          },
          {
              id: 4,
              image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
              price:100,
              quantity: 0,
              title: 
              "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              },
              {
                  id: 5,
              image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
                  price:598,
                  quantity: 0,
                  title: 
                  "New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Siver (4th Generation)"
                  }
  
  
  ];

const itemList = todoList.map((itm => (
  <Item
  id={itm.id}
  title={itm.title}
  price={itm.price}
  image={itm.image}

/>
)))



  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
{itemList}
        </div>
      </div>
      
{getTotalQuantity() > 0 &&  

      <div className='shopping-cart' onClick={() => navigate('/cart')}>
  <ShoppingCart id='cartIcon'/>
 <p>{getTotalQuantity() }</p> 
</div>
 } 
    </div>
  )
}

export default Home