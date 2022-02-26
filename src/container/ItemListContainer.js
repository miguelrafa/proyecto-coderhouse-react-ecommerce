import React, { useEffect, useState } from 'react'
import Item from './Item.js'


const ItemListContainer = () => {

  const url = 'https://run.mocky.io/v3/9e207848-8c47-4272-baa4-d7da876d8874';

  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProducts(data);
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
 
  getProducts();


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