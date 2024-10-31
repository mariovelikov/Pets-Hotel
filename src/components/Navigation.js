import '../stylesheet/navigation.css'
import React from 'react'

function Navigation() {
  return (
    <nav className='navigation'>
        <ul>
            <li><p className='nav-button'>Услуги</p></li>
            <li><p className='nav-button'>За Нас</p></li>
            {/* <button>Галерия</button> */}
            <li><p className='nav-button'>За Контакт</p></li>
        </ul>
    </nav>
  )
}

export default Navigation