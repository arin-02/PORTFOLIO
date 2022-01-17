import React from 'react'

function Footer() {
    return (
        <div className='cont pb-10' >
        <div className="">
            <div className="text-center pt-16 text-slate-300 text-4xl text-white" style={{fontFamily: "eurostile, sans-serif"}}>
                Living,Learning & Leveling Up
            </div>
            <div className="text-center text-slate-300 text-white text-4xl" style={{fontFamily: "eurostile, sans-serif"}}>
                one day at a time
            </div>
        </div>


        
        <div className="thirdpart pt-16 justify-center text-4xl flex gap-3 sm:gap-20">
{/* instagram */}
                    
                    <div className="text-center text-slate-100">
                    <a href="https://www.instagram.com/arin__singh/" target={"_blank"}>
                    <i className="fab fa-instagram"></i>
                    </a>
                    </div>
                    
{/* linkedin */}
                    
                    <div className="text-center text-slate-100">
                    <a href="https://www.linkedin.com/in/arin-singh-9b8383186/" target={"_blank"}>
                    <i className="fab fa-linkedin"></i>
                    </a>
                    </div>
                   
{/* github */}
                    
                    <div className="text-center text-slate-100">
                    <a href="https://github.com/arin-02" target={"_blank"}>
                    <i className="fab fa-github"></i>
                    </a>
                    </div>
                    
{/* twitter */}
                    
                    <div className="text-center text-slate-100">
                    <a href="https://twitter.com/arinsingh02" target={"_blank"}>
                    <i className="fab fa-twitter"></i>
                    </a>
                    </div>
                    
                
        

            
        </div>

        <div className="mt-16 text-center text-slate-300 text-lg font-normal">
            HANDCRAFTED BY ARIN @ 2022
        </div>


        <div className="mt-10  text-center text-slate-300 text-xs font-normal">
            Made with REACT
        </div>

        </div>
       
    )
}

export default Footer
