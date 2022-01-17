import React from 'react'
import cloness from './cloness.png'
import aronotes from './aronotes.png'
import weatherss from './weatherss.png'
import textutils from './textutils.png'
import arobooks from './arobooks.png'
import Insideproject from './Insideproject'

function Projectsarin() {
    return (

    <>
        <div className='block' style={{fontFamily: "Playfair Display, serif"}}>
            <div className="mt-5  head font-semibold text-xl text-center underline underline-offset-2 decoration-2 decoration-pink-500" style={{color:"#b19386"}} >  MY PROJECTS</div>
            <div className="mt-7 font-bold head text-5xl text-center underline underline-offset-2 decoration-2 decoration-pink-500" style={{color:"#4a4a4a"}}> RECENT WORK</div>
        </div>

        <Insideproject projectname="CLONE ZOOM CAR"  projectdescription="This is a car rental website" num={1} imgpic={cloness} imglink="https://clone-zoom-car.vercel.app/"/>

        <Insideproject projectname="ARONOTES NOTE-WEB" num={2}  projectdescription="This is a notes storing website" imgpic={aronotes} imglink="https://arin-02.github.io/ARONOTES-App/"/>

        <Insideproject projectname="WEATHER WEB-APP" num={3} projectdescription="Webapp to tell weather condition" imgpic={weatherss} imglink="https://arin-02.github.io/weatherteller/"/>

        <Insideproject projectname="TEXT CALCULATOR "  
        num={4} projectdescription="Calculate words and convert them" imgpic={textutils} imglink="https://arin-02.github.io/textutils/"/>

        <Insideproject projectname="BOOK DESCRIPTION " num={5} projectdescription="To Save book information" imgpic={arobooks} imglink="https://arin-02.github.io/AROBOOK/"/>

        <br/>
        <br/>
        <div className="mt-20 text-5xl text-center font-semibold">
        Interested in Collaborating or Learning?
        </div>
        <div className="mt-16 text-2xl text-center font-light">
        I’m always open to discussing Coding/Web-D work or partnership opportunities.
        </div>
        <div className="text-center mt-12 ">
        <a href="mailto:asinghdps8@gmail.com"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative font-semibold px-12 sm:px-24 py-2.5 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        START A CONVERSATION
        </span>
        </button></a>
        
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        

    </>

    )
}

export default Projectsarin
