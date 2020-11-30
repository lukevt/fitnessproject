import React from 'react'
import {AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai'
import {IoIosFitness} from 'react-icons/io'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-links">
                <a href="#"><AiOutlineInstagram size={35} color={'#C5B358'}/></a>
                <a href="#"><AiOutlineFacebook size={35} color={'#C5B358'}/></a>
                <a href="#"><AiFillTwitterSquare size={35} color={'#C5B358'}/></a>
                <a href="#"><AiFillYoutube size={35} color={'#C5B358'}/></a>   
            </div>
            <div className="footer-copyright">
                This footer is made with <IoIosFitness size={25} color={'#C5B358'}/> at Le Wagon
            </div>
        </div>
    )
    
}

export default Footer;