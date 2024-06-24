import React from 'react'
import './Benefits.scss'
import BenefitCard from '../../Components/BenefitsCard/BenefitsCard.jsx'

const Benefits = () => {
  return (
    <section id="benefits">
      <div className='container py-5'>
        <div className='benefits-wrapper text-center'>
          <p className='benefits-content'>As a member of Shalom World Fellowship, you receive many benefits, including</p>
        </div>
        <div className='benefits-list pt-5'>
          <div>
            <BenefitCard />
          </div>
          <div>
            <BenefitCard />
          </div>
          <div>
            <BenefitCard />
          </div>
          <div>
            <BenefitCard />
          </div>
          <div>
            <BenefitCard />
          </div>
          <div>
            <BenefitCard />
          </div>
        </div>
        <div className="btn-style my-5">
          <a className='btn-benefits'>Join Now!</a>
        </div>
      </div>
    </section>
  )
}

export default Benefits