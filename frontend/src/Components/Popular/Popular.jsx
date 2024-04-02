import React from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {props.data.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  price={item.price} />
        })}
      </div>
    </div>
  )
}

export default Popular
