import '../stylesheet/navigation.css'
import React, { useEffect, useRef, useState } from 'react'

function Navigation({handleScroll, services, aboutUs}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (ref) => {
    setIsOpen(!isOpen)
    handleScroll(ref);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if(isOpen){
      document.addEventListener("click", handleClickOutside);
    }else{
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen])

  return (
    <header className='header-navigation'>

      <nav ref={menuRef} className='navigation'>
          <ul role='menu' className={isOpen ? "nav-ul" : "nav-ul nav-ul-none"}>
              <li role='none'><p className='nav-button' onClick={() => toggleMenu(services)}>Услуги</p></li>
              <li role='none'><p className='nav-button' onClick={() => toggleMenu(aboutUs)}>За Нас</p></li>
          </ul>
          <div className={isOpen ? 'nav-icon-none' : "nav-icon"} onClick={toggleMenu}><ion-icon name="menu-outline"></ion-icon></div>
      </nav>
      <div className='nav-container'>
        <div className='container-content'>
          <img src="images/drawkit_img.png" alt='хотел за кучета силистра айдемир лого'/>
        </div>
      </div>
    </header>
  )
}

export default Navigation