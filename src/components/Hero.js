import '../stylesheet/hero.css'
import React, {useLayoutEffect} from 'react'

function Hero() {
  const dogImgs = ['dog-1.jpg', 'dog-2.jpg', 'dog-3.jpg', 'dog-4.jpg', 'dog-5.jpg', 'dog-6.jpg', 'dog-7.jpg', 'dog-8.jpg', 'dog-9.jpg', 'dog-10.jpg', 'dog-11.jpg','dog-12.jpg', 'dog-13.jpg'];
  const slideTrack = [];
  const slide = [];

  for(let i=0; i < dogImgs.length; i++ ){
    slide.push(`<div className='slide'><img src='./images/dog-1.jpg' alt='Хотел за кучета Силистра, снимка'/></div>`);
  }
  
  for(let i = 0; i < 3; i++){
    const item = `<div key=${i} className='slide-track'>${slide}</div>`;
    slideTrack.push(item)
  }
  useLayoutEffect(() => {
  })

  return (
    <div className='hero-container'>
      <div className='triangle-1'></div>
      <div className='triangle-2'></div>
      <div className="hero-box flex-title-center">
        <div className='hero-title-box'>
          <h3>
            Добре дошли в хотел 4 лапички - "Аргос"
          </h3>
          <h5>Перфектният престой за вашия любимец</h5>
        </div>
        <div className='open-closed'>
          <p></p>
          <h4>+359 87750 7767</h4>
        </div>
      </div>
      <div className="hero-box slider">
        <div className='slide-track'>
              {dogImgs.slice(0, 4).map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} alt='Хотел за кучета Силистра, снимка'/>
              </div>
              ))}
            </div>

            <div className='slide-track opposite'>
            {dogImgs.slice(4, 8).map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} alt='Хотел за кучета Силистра, снимка'/>
              </div>
              ))}
            </div>

            <div className='slide-track'>
            {dogImgs.slice(8, 12).map((img, index) => (
                <div key={index} className='slide'>
                <img src={`./images/${img}`} alt='Хотел за кучета Силистра, снимка'/>
              </div>
              ))}
            </div> 
      </div>
    </div>
  )
}

export default Hero

