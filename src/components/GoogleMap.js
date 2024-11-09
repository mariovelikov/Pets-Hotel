import React from 'react'
import '../stylesheet/googleMap.css'

function GoogleMap() {
  return (
    <section className='google-map'>
        <h3>Можете да ни намерите на адрес: ул. Бънева Чешма</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2026.1913357543572!2d27.17002379870965!3d44.094349554558285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1730836958130!5m2!1sbg!2sbg" loading="lazy"></iframe>
    </section>
  )
}

export default GoogleMap