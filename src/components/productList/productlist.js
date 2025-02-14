import Products from "./product"
import { useState } from "react"





export function ProductList(props)
{
 
if(props.newProductList.length ===0 )
{
    return <h3>no products available</h3>
}
    

    return  (

        <ul>

                   {props.newProductList.map((val)=>{
                       return    <Products
                       key ={val?.pID}
                       id={val?.pID} 
                       name={val?.pName} 
                       desc={val?.desc }
                       available = {val?.isAvailable}
                       image={val?.image }
                       price={val?.price } 
                       ></Products>
                    })}
    
                    
        </ul>
    
            
                
                
            )

}



export default ProductList