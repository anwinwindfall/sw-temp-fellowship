import React from 'react'
import './Platforms.scss'
import PlatformCard from '../../Components/PlatformCard/Platformcard.jsx'

const Platforms = () => {
  return (
    <section id="platform">
      <div className='container py-5'>
        <div className='platform-wrapper text-center'>
          <h2>Where does your Support Go?</h2>
          <p className='platform-content pt-3 pb-5'>We offer all our platforms completely free of charge, ensuring accessibility for everyone</p>
          <div className='platform-list pb-5'>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
            <div>
              <PlatformCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Platforms