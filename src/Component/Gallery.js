import React,{useEffect} from 'react'
import bgimg from './bgimage.jpg'
import gympic from './gympic.jpg'
import laugharin from './laugharin.jpg'
import standarin from './standarin.jpg'
import pic3 from './pic3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery() {


        AOS.init();

    return (
        <div>
            <hr/>
            <div id='gallery' className='heading text-5xl lg:text-9xl block ' style={{fontFamily: "Playfair Display, serif"}} >

            <div className="my ml-28 lg:ml-80 underline underline-offset-2 decoration-4 decoration-pink-500">MY</div>
            <div className="photos ml-36 mt-3 lg:ml-96 underline underline-offset-2 decoration-4 decoration-pink-500">PHOTOS</div>
            
            </div>

            <div className="   grid grid-cols-2 mt-10 imgs pt-5 flex text-center" >
            {/* bg-bg0 md:bg-bgB bg-fixed bg-no-repeat bg-center */}
            <div className="justify-self-center">
            <img   data-aos-duration="1000" data-aos="fade-down-right" data-aos-delay="100"  src={gympic} style={{width:"400px"}} alt="" />
            </div>
            <div className="im2 justify-self-end justify-self-center self-center">
            <img   data-aos-duration="1000" data-aos="fade-down-left" data-aos-delay="100"  src={standarin} style={{width:"250px"}} alt="" />
            </div>

            </div>
            <div className=" mt-10 imgs  flex justify-center " >
            
            <img data-aos="flip-left" data-aos-duration="1000" data-aos-delay="30" src={bgimg} style={{width:"300px"}} alt="" />

            </div>
            <div className=" mt-10 imgs grid grid-cols-2  " >
            
            <div className="im1 justify-self-center self-center "><img   data-aos-duration="700" data-aos="fade-up-right" data-aos-delay="50" src={laugharin} style={{width:"250px"}} alt="" /></div>

            <div className="im2 justify-self-center"><img   data-aos-duration="700" data-aos="fade-up-left" data-aos-delay="50" src={pic3} style={{width:"450px"}} alt="" /></div>
            

            </div>
            <br/>
            <br/>
            <hr/>
            
        </div>
    )
}

export default Gallery
