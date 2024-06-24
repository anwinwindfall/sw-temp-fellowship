import React from 'react'
import '../../Components/DonateButton/DonateButton.css'

const DonateButton = () => {
  return (
    <div className='donate-button flex my-2'>
      <a className='btn-donate-sw'>Donate</a>
      <ul class="drop-menu">
                    <li class="drop-menu-item">
                        <a href="#" className='drop-item-a'>Join our mission</a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="#" className='drop-item-a'>One-time Gift</a>
                    </li>
                </ul>
    </div>
  )
}

export default DonateButton