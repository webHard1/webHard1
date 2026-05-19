import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../Home/Footer'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm( 
        
        'service_lrlg6o2',
        'template_oi2lzqr',
        form.current,
        '82sOs-4Hq-gbnKT7J'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
        },
        (error) => {
          alert('Failed to send message')
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <>
      <div className="pt-28 px-6 md:px-16 pb-16">

        {/* Heading */}
        <div className="text-center mb-12">

          <div className="flex flex-wrap gap-2 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold">
              Contact
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
              Us
            </h1>
          </div>

          <p className="text-gray-600 mt-4 text-lg">
            Plan your next adventure with Nepal Trek
          </p>

        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>📍 Pokhara, Nepal</p>
              <p>📞 +977 9708121885</p>
              <p>✉️ info@nepaltrek.com</p>
            </div>

          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-8 rounded-2xl shadow-md space-y-5"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Contact