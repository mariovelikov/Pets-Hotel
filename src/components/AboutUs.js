import React from 'react'
import '../stylesheet/aboutUs.css'

function AboutUs({aboutUs}) {
  return (
    <section ref={aboutUs} className='about-us-container'>
      <div className='text-box'>
        <h3 className='about-us-title'>Хотел за домашни любимци - 4 лапи "Аргос" </h3>
        <h5>
          Ние сме хотел за домашни любимци в Айдемир и за нас ще бъде чест да се грижим за Вашите любимци, докато сте далеч от дома си. Разполагаме с просторни, уютни и обзаведени отделения, където всеки наш гост ще се чувства добре! Изградили сме чудесен двор за техните ежедневни забавления и нужди,а ние ще полагаме грижи за тяхното развлечение и престой.
        </h5>
        <h5>
          Ние не сме само хотел, а дом за вашите любимци.
        </h5>
      </div>
      <div className='img-box'>
        <img src='./images/drawkit_img.png' alt='хотел за кучета'/>
      </div>
    </section>
  )
}

export default AboutUs