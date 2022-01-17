import React from 'react'

function Abovefoot() {
    return (
        <>
            <div className="cont block flex justify-center  w-full h-36 text-white  text-center" style={{backgroundColor:"#7510F7"}}>
            
            <div className=" abovef  p-5 flex  justify-center rounded-3xl" style={{backgroundColor:"#141c3a",marginTop:"-6rem"}}>
                <div className="three grid content-center sm:grid-cols-3 grid-cols-1 place-items-center m-10 md:m-16  ">
                    <div className="1st   text-sm md:text-base lg:text-2xl ">
                        START A PROJECT
                    </div>
                    <div className="2nd m-5 w-48 text-xs md:text-base  ">
                        <p>Interested in working together?We should queue up a chat. Lets' begin!!!</p>
                    </div>
                    <div className="  3rd  ">
                    <a href="https://wa.me/919992996249">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-slate-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" style={{backgroundColor:"#141c3a"}}>
     PING ME
  </span>
</button>
</a>
                    </div>
                </div>
            </div>


            </div>
            </>
    )
}

export default Abovefoot
