import React from 'react'
import '../stylesheet/services.css'

function Services({services}) {
  return (
    <section ref={services} className='services-section'>
        <div className='services-box'>
          <h3 className='day-night-title'> Дневна</h3>
          <div className='title-price flex-item-box'>
            <h3>Занималня</h3>
            <h3>20лв</h3>
          </div>
          <ul>
            <li className='flex-item-box'><h6>Занималня</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Храна</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Ветеринарен лекар</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Транспорт (+20лв.)</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Компания</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
          </ul>
        </div>

        <div className='services-box'>
        <h3 className='day-night-title'> Нощувка</h3>
          <div className='title-price flex-item-box'>
            <h3>Куче до 15кг</h3>
            <h3>25лв</h3>
          </div>
          <ul>
            <li className='flex-item-box'><h6>Занималня</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Храна</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Ветеринарен лекар</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
            <li className='flex-item-box'><h6>Транспорт (+20лв.)</h6><ion-icon className="icon" name="checkmark-outline"></ion-icon></li>
          </ul>
        </div>
        <h6 className='price-15'>*Цената за кучета над 15кг се договаря.</h6>
        
    </section>
  )
}

export default Services