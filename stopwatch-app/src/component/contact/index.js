
import React from 'react';
import '../../App.css';
import Footer from '../footer';
import Header from '../header';

const ContactPage = () => (
  <div>
    <Header />
    <main className="main">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:tejaschorge08@gmail.com">tejaschorge08@gmail.com</a></p>
      <p>Phone: +91 9167047247</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/tejaschorge" target="_blank" rel="noopener noreferrer">linkedin.com/in/tejaschorge</a></p>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
