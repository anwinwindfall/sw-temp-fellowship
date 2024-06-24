import React from 'react'
import Questionaire from '../../Components/Questions/Questions.jsx'
import './Faq.scss'

const Faq = () => {
    return (
            <div className='container-fluid'>
               <div className='faq-block'>
                <Questionaire/>
                </div> 
                <div className='faq-block'>
                <Questionaire/>
                </div>
            </div>
    )
}

export default Faq