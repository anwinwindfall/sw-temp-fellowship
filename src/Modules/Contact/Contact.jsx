import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <section id="contact">
            <div className='container py-5'>
                <div className='row contact-wrapper text-center'>
                    <div className='col-lg-6'>
                        <div className='contact-img'></div>
                    </div>
                    <div className='col-lg-6'>
                        <p>
                            Shalom Media USA Inc is a 501(c)3<br/>non-profit organization.<br/>All donations are tax-deductible.<br/>EIN #30-0585506.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact