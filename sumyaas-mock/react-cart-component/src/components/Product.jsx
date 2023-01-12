// import module.css here;
import style from "./product.module.css"
const Product = ({name,price,quantity,id,handleQty}) => {


  return (
    <>
      <div className={style.bigContainer} data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button onClick={()=>handleQty("INCREMENT",id)}  data-testid="quantity-increment">+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button  onClick={()=>handleQty("DECREMENT",id)}  data-testid="quantity-decrement">-</button>
      </div>
    </>
  );
};
export default Product;
