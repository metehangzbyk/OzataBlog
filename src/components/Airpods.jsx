import React from 'react'
import { airpodsData } from '../products/airpodsData'
import MenuItem from './menuItem'
import '../styles/iphone.css'


export const Airpods = () => {
  return (
    <div className='menu'>
      <div className='menuList'>
        {airpodsData.map((menuItem) => {
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
