import React from 'react'
import logo from './logo.gif'
import {Link} from 'react-scroll'


function Navbar() {
    return (
        <nav className=' flex  shadow-md  mx-auto font-semibold px-16 pt-8 '>
            

            <div className="flex gap-4 container justify-start p-0.5  left-0   ">
            <div className="text-2xl absolute left-3 sm:hidden">
                <a href="">
                <i className="fas fa-bars"></i>
                </a>
                

            </div>
            <div className="">
             <img className='w-20 ' src={logo} alt="arin logo" />

            </div>
               

            </div>
            <div className=" hidden  lg:justify-center lg:flex text-xl  font-serif p-0.5 ">
            PORTFOLIO
            </div>

            <div className="flex container  justify-end  gap-4 absolute lg:relative right-0   ">
                <div>
                    <ul className='flex gap-4 '>
                        <li className='p-0.5 hidden cursor-pointer sm:flex'><Link to="gallery" smooth={true} duration={1500}>PHOTOS</Link> </li>
                        <li className='p-0.5 hidden sm:flex cursor-pointer'><Link to="tictactoeid" smooth={true} duration={700}>TICTACTOE</Link></li>
                    </ul>
                </div>
                <div>

                <button className='font-semibold text-blue-700 bg-blue-100 rounded-md border p-0.5 hover:bg-blue-200  drop-shadow-xl '>Sign In</button>
                </div>
                /
                <div>
                <button className='font-semibold text-blue-700 bg-blue-100 rounded-md border p-0.5 hover:bg-blue-200 drop-shadow-xl '>Sign Up</button>
                


                </div>
            </div>
        
        </nav>
    )
}

export default Navbar
