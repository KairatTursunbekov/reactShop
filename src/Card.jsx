import React from 'react'
import { useCart } from 'react-use-cart'


const Card = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    }=useCart()
    if(isEmpty) return <h2>Basket is empty</h2>
  return (
    <section className="py-4 container">
      <h5>
        ({totalUniqueItems}) ({totalItems})
      </h5>
      <table className="table table-light table-hover m-0">
        {items.map((item, id) => {
          return (
            <tr key={id}>
              <td>
                <img src={item.img} style={{ height: "6rem" }}></img>
              </td>
              <td>{item.title}</td>
              <td>{item.price} $</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button onClick={() => removeItem(item.id)}>remove</button>
              </td>
            </tr>
          );
        })}
      </table>
      <div>
        <h2>total amount: {cartTotal}$</h2>
      </div>
      <div>
        <button onClick={()=> emptyCart()}>Clear</button>
      </div>
    </section>
  );
}

export default Card
