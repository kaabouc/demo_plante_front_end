import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function service() {
  return (
    <div>
  
  <Navbar />

    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h6> IRSI Chatbot</h6>
                    <h2> Nos Services</h2>
                    <p>Whether you have a question, want to collaborate, or simply share your thoughts, we'd love to hear from you. Reach out to us [provide contact information or a link to a contact form].</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="border-first-button scroll-to-section">
                      <Link to="/registre">Get Start</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/chatbot2.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <div >
    <h1 class="display-7">Welcome to ensa project  - Your Gateway to ferme and plant  Knowledge!</h1>
    <p class="lead">Welcome to the heart of ENSA ferme. We are more than just a ENSA ferme; we are a community driven by passion and purpose.</p>


    <p>At [Your Organization's Name], we are on a mission to [state your mission or objective]. Our values of [list a few core values] guide us in every decision we make and define the essence of who we are.</p>

  
    <ul>
      <li> guide us in every decision .</li>
      <li>we make and define the essence of who we are</li>
      <li>we make and define the essence of who we are</li>
      <li>Performance Tuning Strategies</li>

      <li>to make a difference.</li>
    </ul>

 
    <p>Feel free to tailor this template to fit the specific details and character of your organization. Include relevant images, links, or additional sections that showcase what makes your organization unique.</p>



  
    <p class="lead">Welcome to the heart of ENSA ferme</p>
  </div>
 <Footer/>
  </div>
 
  )
}
