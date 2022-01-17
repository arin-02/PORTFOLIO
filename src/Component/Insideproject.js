import React from 'react'

function Insideproject(props) {
    return (
        <>

<div className="pj  mt-20 block " style={{fontFamily: "'Montserrat', sans-serif"}}>
    <div  className="imgclone flex justify-center drop-shadow-2xl " >

        
        <div className="imm flex justify-center hover:brightness-50  " >
            <img className=' pic  rounded-3xl ' style={{width:"70%",zIndex:"1",filter:" brightness(40%)"}} src={props.imgpic}  alt="" />
        </div>
        


        <div className=" abouttext ">

            <div className="textimg  absolute  text-white text-xl md:text-4xl lg:text-6xl top-5 sm:top-24 md:top-24 font-black "  style={{zIndex:"3",left:"17%"}}>
                 {props.projectname}
            </div>
            <div className="textimg text-4xl sm:text-6xl md:text-7xl absolute  text-red-500 lg:text-9xl  font-black "  data-aos="zoom-in-down" data-aos-duration="1000"  style={{zIndex:"3",left:"83%",fontFamily:"'Volkhov', serif"}}>
                 {props.num}
            </div>

            <div className="textimg  top-12 sm:top-32 md:top-36 lg:top-44 absolute md:text-2xl text-white text-sm sm:text-base lg:text-2xl  font-light "   style={{zIndex:"3",left:"17%"}}>
                {props.projectdescription}
            </div>

            <div className="textimg top-24 left-32 sm:top-40 md:left-52 lg:top-56 lg:left-72 md:top-48 absolute text-white text-2xl  font-light "   style={{zIndex:"3"}}>
                <div className="btn ">
                    <a href={props.imglink} target={"_blank"}>
                    <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs  md:text-sm px-2.5 py-1.5 md:px-5 md:py-2.5 text-center mr-2 mb-2 ">VIEW PROJECT</button>
                    </a>
                </div>
            </div>
        </div>
        
        
    </div>
            
</div>



        </>
    )
}

export default Insideproject
