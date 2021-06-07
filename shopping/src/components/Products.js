// import { useState } from 'react';
import thumb from '../images/banner.jpg'
function Product(props) {
 const { product, onRemove, onAdd,  cartItems }=props;
//  const [state, setState] =useState(1);
//  const but= (banner)=>{
//   const exist = cartItems.find((x)=> x.id === product.id); 
//   if(exist){
//     <h1>hi</h1>
//   }else {
//     <h1>hee</h1>
//   }
 

//  }




  //  const button = (item) => {
//   const exist = cartItems.find((x) => x.id === item.id);
//   if (exist) {
//     <div className="col-2">
//               <button className="btn" onClick={()=>onRemove(item)}>-</button>
        
//               <button className="btn" onClick={()=>onAdd(item)}>+</button>
//             </div>
    
//   } else {
//     <button onClick={ ()=> onAdd(product) }>add</button>
//   }
// };
    return (
      <div className="card">
        <img className="small" src={product.image} alt={product.name}/>
        <h2>{product.name}</h2>
        <div><strong><span>&#8377;</span> {product.price}</strong></div>
        <p>{product.desc}</p>
        <div>
        {/* <button className="btn" onClick={()=> onAdd(product)}>add</button> */}
        {/* { cartItems  .map((item) => (
              <div key={item.id} className="row"> */}
                <div>
                  <button className="btn" onClick={()=>onRemove(product)}>-</button>
                 {
              cartItems .filter((x)=> x.id===product.id) .map((item) => (
                <div key={item.id} >                 
                    
                    {item.qty}                   

                  </div>
              ))              
            }
                  <button className="btn" onClick={()=>onAdd(product)}>+</button>
                </div>
                {/* </div>
            ))} */}
        {/* {cartItems.length < 0 ?(
          <button className="btn" onClick={()=> onAdd(product)}>add</button>

            ) : (
              cartItems .filter((x)=> x.id===product.id) .map((item) => (
                <div key={item.id} className="row">
                  <div className="col-2">
                    <button className="btn" onClick={()=>onRemove(item)}>-</button>
                    {item.qty}
                    <button className="btn" onClick={()=>onAdd(item)}>+</button>
                  </div>
                  </div>
              ))
              
            )} */}



          {/* { cartItems.map((items)=>{        
          const exist = cartItems.find((x)=> x.id === items.id);
          <div key={items.id}> */}
           
           {/* {
             cartItems.map((product)=>
             <div key={product.id}>
               <div>{product.name}</div>

             </div>
             )
           } */}
        
           {/* {  cartItems.map((item)=>(
             <div key={item.id}>
               {item.qty} === 1 ? (
              <div>
              <button onClick={()=> onRemove(product) }>-</button>
              <div>{item.qty}</div>
              <button onClick={()=> onAdd(product) }>+</button>
              </div>
            ) : (

              <button onClick={ ()=> onAdd(product) }>add</button>
            )

             </div>

           )           
           )    }    */}
             
              {/* {cartItems.length>0 ? (
              <div>
                
              <button onClick={()=> onRemove(product) }>-</button>
              <div>{cartItems.length}</div>
              <button onClick={()=> onAdd(product) }>+</button>
              </div>
            ) : (

              <button onClick={ ()=> onAdd(product) }>add</button>
            )

             } */}

          {/* </div>
        })}
             */}
        </div>
      </div>
    );
  }
  
  export default Product;
  