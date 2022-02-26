import React from 'react'

const Item = ({product}) => {
  return (
  
    <article className="card1">
      <div className="card-img-top mx-auto cardImage">
          <img src={ product.img } alt="" />
      </div>
      <div className="card-title">
          <h3> { product.name } </h3>
          <h5> ${ product.price } </h5>
      </div>
  </article>















  );
}

export default Item