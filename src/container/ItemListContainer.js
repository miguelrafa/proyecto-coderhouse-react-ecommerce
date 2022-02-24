import React from 'react'
import Item from './Item.js'


const ItemListContainer = () => {

  const text = "Bienvenidos!!"


  return (
    <>
    <div>
    <Item saludo={text}></Item>
    </div>
    </>
  );
}

export default ItemListContainer