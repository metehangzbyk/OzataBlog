import React from 'react'
import { aksesuarData } from '../products/aksesuarData'
import MenuItem from './menuItem'
import '../styles/iphone.css'


export const Aksesuarlar = () => {
  return (
    <div className='menu'>
      <div className='menuList'>
        {aksesuarData.map((menuItem) => {
          return (
            <MenuItem
            key={menuItem.name}
            image={menuItem.image}
            name={menuItem.name}
            />
          )
        })}
      </div>
    </div>
  )
}
