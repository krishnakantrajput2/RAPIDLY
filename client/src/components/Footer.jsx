import  "react" 
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row  lg:justify-between gap-2">
        <p>© All Rights Reserved 2025.</p>
        <div className="flex items-center gap-4 justify-center text-2xl">
          <a href="" className="hover:text-primary-100">
        <FaFacebook/>
        </a>
        <a href="" className="hover:text-primary-100">
        <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/krishnakant-rajput-a45b40293/" className="hover:text-primary-100">
          <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
