import Product from "./Products";

function Main(props) {
    const { products, onAdd, onRemove, cartItems}=props;

    return (
      <main className="col-2">
          <h1 className="container">products</h1>
            <div className="block wrap" >
                {products.map((product)=> <Product key={product.id} 
                product={product} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}>
            </Product>)}
            </div>
      </main>
    );
  }
  
  export default Main;
  