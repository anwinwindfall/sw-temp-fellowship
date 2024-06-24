import React from 'react'
import '../../Components/PlatformCard/Platformcard.scss'
import Platform1 from '../../images/platform-1.svg'

const PlatformCard = () => {
  return (
    <div className='platform-card'>
      <img src={Platform1} className='img-fluid platform-img'/>
      <p class="pt-g-5 pt-3 pt-md-5">Faith-based family entertainment television channel that encourages Christ-encounter through diverse and compelling programming</p>
    </div>
  )
}

export default PlatformCard