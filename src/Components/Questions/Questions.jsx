import React from 'react'
import './Questions.scss'
import PlusIcon from '../../images/plus-icon.svg'

const Questions = () => {
    return (
        <div class="accordion">
            <div class="accordion__header">
                <h2 class="accordion__question">What types of resources are available to Shalom World Fellowship Members?</h2>
                <span class="accordion__icon">
                    {/* <i id="accordion-icon" class="ri-add-line"></i> */}
                    <img src={PlusIcon} className='img-fluid'/>
                </span>
            </div>
            <div class="accordion__content">
                <p class="accordion__answer py-3">Shalom World offers numerous resources to keep you rooted in Christ. Our multimedia platforms, prayer channel, and events are free to access. Monthly online gatherings and conferences unite our community, fostering encounters with Jesus's love.</p>
            </div>
        </div>
    )
}

export default Questions