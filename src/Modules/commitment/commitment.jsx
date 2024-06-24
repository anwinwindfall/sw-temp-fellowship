import React from 'react'
import './commitment.scss'
import Fellowship from '../../images/sw-fellowship.svg'

const commitment = () => {
  return (
    <section id="commitment">
      <div className='container py-5'>
        <div className='row commitment-wrapper text-center'>
          <div className='content col-lg-6 my-auto'>
            <h3>
              Try answering!
            </h3>
            <p className="pt-3">
              What percentage of the world has heard about Jesus Christ and the good news of salvation?
            </p>
            <div>
              <ul className='ul-selection'>
                <li>90%</li>
                <li className='active'>70%</li>
                <li>50%</li>
                <li>40%</li>
              </ul>
            </div>
            <p className="pt-3 pb-3">
              Wrong!
            </p>
          </div>
          <div className='col-lg-6'>
            <div className='join-block'>
              <img src={Fellowship} className='img-fluid'/>
              <p className="py-4 py-lg-5 py-md-5">
                Your commitment to Shalom World Fellowship extends far beyond today, impacting lives everywhere.
                Many more are yet to hear the Good News. Will you commit to sharing the peace of Christ with them.
              </p>
              <a className='btn-join'>Join Now!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default commitment