import React from 'react'
import './Gratitude.scss'
import Facebook from '../../images/Facebook.svg'
import Instagram from '../../images/instagram.svg'
import Whatsapp from '../../images/whatsapp.svg'
import Youtube from '../../images/youtube.svg'
import X from '../../images/x.svg'

const Gratitude = () => {
  return (
    <section id="gratitude">
      <div className='container py-5'>
        <div className='row gratitude-wrapper text-center'>
          <h3 className='pb-4'>
            THANK YOU!
          </h3>
          <p>
            As a non-profit organization, Shalom World depends entirely on your generosity. If you're already part of Shalom World Fellowship,
            we extend our heartfelt gratitude to you.
            And if you're contemplating joining us in this vital mission of evangelization, we thank you sincerely; we're thrilled at the prospect of you joining hands with us
          </p>
          <h6>SPREAD THE NEWS, SHARE</h6>
          <ul class="py-5">
            <li><img src={Facebook} className='img-fluid'/></li>
            <li><img src={Youtube} className='img-fluid'/></li>
            <li><img src={Instagram} className='img-fluid'/></li>
            <li><img src={Whatsapp} className='img-fluid'/></li>
            <li><img src={X} className='img-fluid'/></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Gratitude