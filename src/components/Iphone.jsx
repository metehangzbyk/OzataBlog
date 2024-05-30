import React from 'react'
import { iphoneData } from '../products/iphoneData'
import MenuItem from './menuItem'
import '../styles/iphone.css'


export const Iphone = () => {
  return (
    <div className='menu'>
      <div className='menuList'>
        {iphoneData.map((menuItem) => {
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
