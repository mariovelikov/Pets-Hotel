import '../stylesheet/hero.css'
import React, {useLayoutEffect, useState} from 'react'

function Hero() {
  const dogImgs = ['dog-1.jpg', 'dog-2.jpg', 'dog-3.jpg', 'dog-4.jpg', 'dog-5.jpg', 'dog-6.jpg', 'dog-7.jpg', 'dog-8.jpg', 'dog-9.jpg', 'dog-10.jpg', 'dog-11.jpg','dog-12.jpg', 'dog-13.jpg'];
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const phoneNumber = "+359 877 209 270";

  useLayoutEffect(() => {
    splitImages();
  }, [])

  const splitImages = () => {
    setRow1(dogImgs.slice(0, 4));
    setRow2(dogImgs.slice(4, 8));
    setRow3(dogImgs.slice(8, 12));
  }

  const callFunc = () => {
    window.location.href = `tel: ${phoneNumber}`
  }

  return (
    <div className='hero-container'>
      <div className="hero-box flex-title-center">
        <div className='hero-title-box'>
          <h3>
            Добре дошли в хотел 4 лапички - "Аргос"
          </h3>
          <h5>Перфектният престой за вашия любимец</h5>
        </div>
        <button role='menuitem' className='open-closed' onClick={callFunc}>
          <p></p>
          <h4>{phoneNumber}</h4>
        </button>
      </div>
      <div className="hero-box slider">
        <div className='slide-track'>
              {row1.length > 0 ? row1.map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} loading="lazy" alt='Хотел за кучета Силистра, снимка'/>
              </div>
              )) : null}
            </div>

            <div className='slide-track opposite'>
            {row2.map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} loading="lazy" alt='Хотел за кучета Силистра, снимка'/>
              </div>
              ))}
            </div>

            <div className='slide-track'>
            {row3.map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} loading="lazy" alt='Хотел за кучета Силистра, снимка'/>
              </div>
              ))}
            </div> 
      </div>
    </div>
  )
}

export default Hero

