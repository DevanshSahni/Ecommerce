import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {productID}=useParams();
  
  return (
    <div>
      {productID}
    </div>
  )
}

export default Product