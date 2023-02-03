import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  // to fetch the state cart items  ad the tax price qunatity calculator
  const { cartItems  , subTotal ,tax, shipping ,total} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // increment decrement deletehandler
  const increment = (id) => { 
  dispatch({
    type: "addToCart",
    payload: { id },
  })
  dispatch({type : "calculatePrice",})
}
  const decrement = (id) => { 
    dispatch({
      type: "decrement",
      payload: id ,
    })
    dispatch({type : "calculatePrice",})
  }
  const deleteHandler = (id) => {
   dispatch({
      type:"deleteFromCart",
      payload: id,
    })
    dispatch({type : "calculatePrice",})
   }
  return (
    <div className='cart'>

      <main>
        {
          cartItems.length > 0 ? (
            cartItems.map(i => (
              <CartItem
                name={i.name}
                price={i.price}
                imgSrc={i.imgSrc}
                qty={i.quantity}
                id={i.id}
                key={i.id}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
              />))
          ) : <h1>No items yet</h1>
        }
      </main>
      <aside>
        <h2>Subtotal : ${subTotal}</h2>
        <h2>Shipping : ${shipping}</h2>
        <h2>Tax      : ${tax}</h2>
        <h2>Total    : ${total}</h2>
      </aside>
    </div>
  )
}


// cart item compo
const CartItem = ({ name, price, imgSrc, qty, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt="name" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
)
export default Cart