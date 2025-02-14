import ProductForm from "./Productform";
import { useState } from "react";


function CreateProduct(props)
{

let [showForm,updateShowForm]  =useState(false)
function onCreateProduct(product)
{
 props.createProduct(product)
}

function onCreateNewProduct()
{
    updateShowForm(true)
}

function onProductSubmittedOrCancelled()
{
    updateShowForm(false)
}

return (
   
        <div  style={{backgroundColor: 'white', padding:'10px 20px '}}>
           { !showForm && <button onClick={onCreateNewProduct}>Create Product</button>}
            {showForm && <ProductForm  createProduct={onCreateProduct}  onCancel={onProductSubmittedOrCancelled}></ProductForm>}
        </div>
   
)

   
    

}


export default CreateProduct;