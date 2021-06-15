function Product(props) {
 const { product, onRemove, onAdd,  cartItems }=props;
 let button;

 const exist= cartItems.find((x)=> x.id===product.id);


if(exist){
  button= <div className="row center">
  <button className="btn" onClick={()=>onRemove(product)}>-</button>
 {
cartItems.filter((x)=> x.id===product.id).map((item) => (
<div key={item.id}> {item.qty} </div>
))              
}
  <button className="btn" onClick={()=>onAdd(product)}>+</button>
</div>
} else {
   button=  <button className="btn" onClick={()=>onAdd(product)}>add</button>
}
    return (
      <div className="card">
        <img className="small" src={product.image} alt={product.name}/>
        <h2>{product.name}</h2>
        <div><strong><span>&#8377;</span> {product.price}</strong></div>
        <p>{product.desc}</p>
        <div><center>{button}</center>
       
        </div>
      </div>
    );
  }
  
  export default Product;
  