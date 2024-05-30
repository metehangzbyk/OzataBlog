import React from 'react'
import { samsungData } from '../products/samsungData'
import MenuItem from './menuItem'
import '../styles/iphone.css'


export const Samsung = () => {
  return (
    <div className='menu'>
      <div className='menuList'>
        {samsungData.map((menuItem) => {
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
