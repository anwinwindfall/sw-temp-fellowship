import React from 'react'
import './HeroBanner.scss'

const HeroBanner = () => {
  return (
    <div className='sw-background' id='home'>
      {/* <div class="container grid mlg:grid-cols-2 mx-auto h-full items-center">
        <div class="home">
          <div className='home-logo-img'></div>
          <h1 class="py-2">Support the Global Mission to Help Millions More Encounter Christ</h1>
          <p class="">
            Shalom World Fellowship is a diverse community of individuals contributing monthly to
            support our global mission of leading souls to the Peace of Christ. To become a member, a minimum donation of $10 is required. Every donation,
            big or small, plays a crucial role in reaching millions with the message of Christ's love.
          </p>
        </div>
        <div>
          <div>

          </div>
        </div>
      </div> */}
      <div class="container home-wrapper h-100">
        <div className='row'>
          <div class="home col-lg-7">
            <div className='home-logo-img'></div>
            <h1 class="py-2">Support the Global Mission to Help Millions More Encounter Christ</h1>
            <p class="">
              Shalom World Fellowship is a diverse community of individuals contributing monthly to
              support our global mission of leading souls to the Peace of Christ. To become a member, a minimum donation of $10 is required. Every donation,
              big or small, plays a crucial role in reaching millions with the message of Christ's love.
            </p>
          </div>
          <div className='col-lg-4'>
            <div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner