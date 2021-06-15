import {useHistory} from 'react-router-dom';

function Bag(props) {
    const {onAdd, onRemove, cartItems, totalPrice, itemsPrice, taxPrice, shippingPrice}=props;
    const history = useHistory()
    return (
<aside className="col-1">
          <div className="cart ">
            <h1 className="container">cart</h1>
            
            <div className="block">
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row"> 
                
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                  <button className="btn" onClick={()=>onRemove(item)}>-</button>
                  {item.qty}
                  <button className="btn" onClick={()=>onAdd(item)}>+</button>
                </div>
                <div className="col-2 text-right">
                  {item.qty} x <span>&#8377;</span> {item.price}
                </div>
              </div>
            ))}
       

            {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right"><span>&#8377;</span> {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right"> <span>&#8377;</span> {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
              <span>&#8377;</span> {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong><span>&#8377;</span> {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="btn" onClick={
                    ()=> history.push('/ordersuccess') }>
                confirm order
              </button>
            </div>
          </>
        )}
             </div>
          </div>
      </aside>
    );
  }
  
  export default Bag;
  