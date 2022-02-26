import React, { useEffect, useState } from 'react'
import Item from './Item.js'


const ItemListContainer = () => {

  const url = 'https://run.mocky.io/v3/9e207848-8c47-4272-baa4-d7da876d8874';

  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    try {
        const resp = await fetch(url);//esperamos a que se cumpla la promesa
        const data = await resp.json();//esperamos a que se parse la respuesta
        setProducts(data);//seteamos nuestro state de productos
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
  /*uso de fetch con async/await*/
  getProducts();

  /*uso de fetch API con promesas --descomentar y comentar "getProducts()' para probar--*/
  // fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => setProducts(data))
  //     .catch(err=> console.log(err));

}, [])

return (
  <section className="flexSectionProductosList">

      {
          products.length ?  
          
          (
              products.map( product => {
                  return(
                      <div key={product.name}>
                          <Item product={product} />
                      </div>
                      
                  )
              })
          )

          : <p>Cargando productos...</p>
      }


  </section>
)
}

export default ItemListContainer