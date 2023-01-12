import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className='product-card'>
      <Link to={props.page}>
        <img
          src={props.image}
          alt={props.title}
        />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Link>
    </div>
  )
}

export default ProductCard
