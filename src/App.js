    import './app.css'
    import ProductList from './components/productList/productlist'
    import CreateProduct from './components/productList/createProduct/createProduct'
   
    function App()
    {
      return (

         <div>
             <CreateProduct></CreateProduct>
             <ProductList></ProductList>
         </div>
      ) 
    }


    export default App