import React from 'react'
import Button from '../Button/Button'
import "./TalkToUs.scss"

const TalkToUs = () => {
  return (
    <section className='section talkToUs'>
        <div className="left">
            <h1 className="title">TALK TO US</h1>
            <p className="content">We'll get back to you within 24 hours. No ink left unturned!</p>
        </div>

        <div className="right">
            <p className="content">Got a question or ready to book? <br /> Drop us a line below.</p>

            <form>
                <input type="text" placeholder='Your Name*' />
                <input type="text" placeholder='Phone Number*' />
                <input type="email" placeholder='Email*'/>
                <textarea cols="30" rows="5" placeholder='Message'></textarea>
                <Button content={"CALL ME BACK"} />
            </form>
        </div>
    </section>
  )
}

export default TalkToUs