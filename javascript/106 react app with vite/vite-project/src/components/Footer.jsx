import React from 'react'
import './Footer.css'
const Footer = () => {
return (
    <div>
        <footer className='footer'>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </footer>
    </div>
)
}

export default Footer
