import {useHistory} from 'react-router-dom';

function Order ( props) {
     const {totalPrice, cartItems}= props;
     const history = useHistory()
    return (
      <div className="order row center">
       <div><h1> <span>&#8377;</span> {totalPrice}</h1></div>
       <div onClick={
         cartItems.length === 0 ? (
          ()=> alert('please add some items')

         ) : (
          ()=> history.push('/ordersuccess')
         )
         
       }><h1 className="fill">place order</h1></div>
      
      
      </div>     

    );
  }
  
  export default Order;
  