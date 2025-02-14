import React, { useState } from "react";

function ProductForm(props) {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDesc, updateDesc] = useState("");
  let [pAvailable, updateAvailability] = useState("");
  let [pImageUrl, updateImageUrl] = useState("");

  // let [userInput,updateUserInput]=useState({
  //    pName:'',
  //    pPrice:'',
  //    pDesc:'',
  //    pAvailable:'',
  //    pImageUrl:''
  // })

  function nameInputHandler(e) {
    updateName(e.target.value);
    // updateUserInput({...userInput,pName:e.target.value})

    //when current state is dependent on previous
    // updateUserInput((prevState)=>{
    //     return {...prevState,pName:e.target.value}
    // })
  }

  function priceInputHandler(e) {
    updatePrice(e.target.value);
    // updateUserInput({...userInput,pName:e.target.value})
  }

  function descInputHandler(e) {
    updateDesc(e.target.value);
    // updateUserInput({...userInput,pName:e.target.value})
  }

  function availableInputHandler(e) {
    updateAvailability(e.target.checked);
    // updateUserInput({...userInput,pName:e.target.value})
  }
  function imageInputHandler(e) {
    updateImageUrl(e.target.value);
    // updateUserInput({...userInput,pName:e.target.value})
  }

  function createproductEventHandler(e) {
    e.preventDefault();
    let product = {
      pName: pName,
      desc: pDesc,
      isAvailable: Boolean(pAvailable),
      image: pImageUrl,
      price: pPrice,
    };

    updateName("");
    updatePrice("");
    updateAvailability("");
    updateDesc("");
    updateImageUrl("");

    // console.log(product)

    props.createProduct(product);
    props.onCancel()
  }


 

  return (
    <form className="row g-3" onSubmit={createproductEventHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={pName}
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>

      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={pPrice}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDesc}
          onChange={descInputHandler}
        />
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          onChange={availableInputHandler}
          checked={pAvailable}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImageUrl}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" onClick={props.onCancel} className="btn btn-primary">
        cancel
      </button>
    </form>
  );
}

export default ProductForm;
