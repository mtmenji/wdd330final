import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="arrow"/> SHOP <img src={arrow_icon} alt="arrow"/> {product.category} <img src={arrow_icon} alt="arrow"/> {product.name}
    </div>
  )
}

export default Breadcrumb
