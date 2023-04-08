import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Join.css'

function Join() {
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()
    console.log('oi')
    emailjs.sendForm('service_uta6ya7', 'template_77ixszq', form.current, 'rjweZfuIAT9o-MVro')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });

  }

  return (
    <div className='join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Read to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>

      <div className="right-j">

        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user-email' placeholder='Digite seu melhor email' />
          <button type='submit' className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join