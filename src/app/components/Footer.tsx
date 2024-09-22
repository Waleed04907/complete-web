import React from 'react'
import Link from 'next/link'
const Footer = () => {
      return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section  border-spacing-6  flex-auto bg bg-blue-700 bottom-5 space-x-6" >
              <h4>About Us</h4>
              <p>We are a company dedicated to providing the best services to our Company.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: wbs04907@gmail.com</p>
              <p>Phone: +92 3136548388</p>
            </div>
    
            <div className="footer-section">
              <h4>Follow Us</h4>
              <ul className="social-links">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
    
          <div className="footer-bottom">
            <p>&copy; 2024 YourCompany. All rights reserved.</p>

    
 <Link href='\'> </Link>    
 <Link href='\about'> </Link>  
 <Link href='\adress'> </Link>   
 <Link href='\contact'> </Link> 
 </div>
        </footer>
  )
}

export default Footer