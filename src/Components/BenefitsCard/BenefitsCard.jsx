import React from 'react'
import '../../Components/BenefitsCard/BenefitsCard.scss'
import Benefits1 from '../../images/Benefits1.svg'

const BenefitsCard = () => {
  return (
    <div className='benefit-card'>
        <img src={Benefits1} className='img-fluid'/>
      <h6 class="py-3">Daily Holy Mass</h6>
      <p>Prayer intentions offered at Holy Mass and during Eucharistic adoration</p>
    </div>
  )
}

export default BenefitsCard
