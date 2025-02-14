  import './app.css'
  import ProductList from './components/productList/productlist'
  import CreateProduct from './components/createProduct/CreateProduct'
  import FilterProduct from './components/filterProduct/filterProduct'
import { useState } from 'react'
   


let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 12
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15
  },
  {
      pID: 4, 
      pName: 'oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14
  }
]


    function App()
    {


      let[filterTextValue,updateFilterText] = useState('all')
      let [newProductList,updateProductList]=useState(products)

      let filteredProductList = newProductList.filter((val)=>{
        if(filterTextValue === 'available')
        {
          return val.isAvailable === true
        }
        if(filterTextValue === 'unavailable')
        {
          return val.isAvailable === false
        }
        else
        {
          return val
        }
      })



      function createProduct(product)
      {
        product.pID= newProductList.length+1
        updateProductList([product,...newProductList])

      }

      function onFilterValueSelected(filtervalue)
      {
        updateFilterText(filtervalue)
      }


      return (

        <div className='row'>
        <div className='col-lg-8 mx-auto'>
             <CreateProduct createProduct={createProduct} ></CreateProduct>
             <FilterProduct FilterValueSelected={onFilterValueSelected}></FilterProduct>
             <ProductList newProductList={filteredProductList} ></ProductList>
         </div>
         </div>
      ) 
    }


    export default App