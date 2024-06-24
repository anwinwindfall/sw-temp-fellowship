import React from 'react'
import './SwMedia.scss'
import Icon1 from '../../images/SocialIcons1.svg'
import Icon2 from '../../images/SocialIcons2.svg'
import Icon3 from '../../images/SocialIcons3.svg'
import Icon4 from '../../images/SocialIcons4.svg'
import Media from '../../Components/Media/Media.jsx'
// import BenefitCard from '../../Components/BenefitsCard/BenefitsCard.jsx'

const SwMedia = () => {
  return (
    <section id="SwMedia">
      <div className='container py-5'>
        <div className='media-wrapper text-center py-5'>
          <Media/>
          <ul class="py-4">
            <li>SHARE</li>
            <li><img src={Icon1} className='img-fluid'/></li>
            <li><img src={Icon2} className='img-fluid'/></li>
            <li><img src={Icon3} className='img-fluid'/></li>
            <li><img src={Icon4} className='img-fluid'/></li>
          </ul>
          <p>
          Shalom World is an initiative of Shalom Media USA Inc, a 501(c)3 non-profit organization. All donations are tax-deductible. Call: (215) 366-3031, Email: fellowship@shalomworld.org
          </p>
        </div>
      </div>
    </section>
  )
}

export default SwMedia