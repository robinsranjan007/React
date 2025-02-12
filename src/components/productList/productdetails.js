import Buttons  from "./button";
import React ,{useState}from "react";






function ProductDetails(props){

   
console.log('productDetails component executed')

 let [productCount,updateCount]=useState(0) 


function displayCount() {
    return productCount > 0 ? productCount : <h1>0</h1>;
  }


let incrementCount =()=>{
  updateCount(++productCount)
  
}

let decrementCount = ()=>{
  if(productCount>0)
  {

    updateCount(--productCount)
  }
}

    let badgeClass = 'badge-margin-left-240 badge '
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger'
    
return(

    <div className="d-flex align-items-center justify-content-start mt-1"  >
    <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
       ${props.price}
    </h6>
    <Buttons eventHandler ={decrementCount}>-</Buttons>
    <span >{productCount}</span>
    <Buttons eventHandler={incrementCount}>+</Buttons>
    <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
  </div>


)

}



export default ProductDetails