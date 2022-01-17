import React,{useState,useEffect} from 'react'
import bgimg from './bgimage.jpg'


function Mbody() {
    const [icount, setIcount] = useState(0);
    const [lcount, setLcount] = useState(0);
    const [gcount, setGcount] = useState(0);
    const [tcount, setTcount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            instacount();
            linkedincount();
            githubcount();
            twittercount();
        }, 700);
            
        
        
    }, []);
    useEffect(() => {
        if(icount>0)
        {

            instacount();
            linkedincount();
            githubcount();
            twittercount();
        }
    }, [icount,lcount,gcount,tcount]);
    
    const instacount=()=>{
        if(icount<565)
        {
            setIcount(icount+1);
        }
    }
    const linkedincount=()=>{
        if(lcount<158)
        {
            setLcount(lcount+1);
        }
    }
    const githubcount=()=>{
        if(gcount<6)
        {
            setGcount(gcount+1);
        }
    }
    const twittercount=()=>{
        if(tcount<7)
        {
            setTcount(tcount+1);
        }
    }

     

    return (
        <div className=" px-10 pb-10 sm:px-40 sm:pb-40 block pt-10   justify-center " >
        <div className="block sm:flex gap-8">
                <div className="firstpart">
                    <img className='   md:h-96' src={bgimg} alt="bgimg" />
                </div>
                <div className="secondpart font-bold">
                       <div className="pb-5">ARIN SINGH | <a href="universityicon"><i className="fas fa-university text-green-500"></i></a> NIT KURUKSHETRA</div> 
                       <hr/>
                       <hr/>
                       <hr/>
                       <div className="education font-medium">
                       <i className="fas fa-graduation-cap"></i> B-TECH (2020-2024)
                           ECE
                       </div>
                       <hr/>
                       <hr/>
                       <hr/>
                        <div className="font-light italic">
                            <div className="font-semibold"><i className="fas fa-laptop text-red-500"></i> ABOUT:-</div> 
                            <ul>
                                <li><i className="fas fa-angle-right"></i>COMPETITIVE CODER</li>
                                <hr/>
                                <li><i className="fas fa-angle-right"></i>FRONT-END DEVELOPER</li>
                                <hr/>
                                <li><i className="fas fa-angle-right"></i>PHOTO/VIDEO EDITER</li>
                                <hr/>
                                
                            </ul>
                        </div>
                        <hr/>
                       <hr/>
                       <hr/>
                       <div className="hover:italic hover:text-red-500 font-normal">
                           BE A VOICE,NOT A ECHO
                       </div>

                </div>
            </div>
                <div className="thirdpart pt-10 justify-center text-4xl flex gap-3 sm:gap-20">
{/* instagram */}
                    <div className='block'>
                    <div className="text-center">
                    <a href="https://www.instagram.com/arin__singh/" target={"_blank"}>
                    <i className="fab fa-instagram"></i>
                    </a>
                    </div>
                    <div className="num text-2xl font-semibold text-center">{icount}+</div>
                    <div className="down text-lg text-slate-500">followers</div>
                    </div>
{/* linkedin */}
                    <div className='block'>
                    <div className="text-center">
                    <a href="https://www.linkedin.com/in/arin-singh-9b8383186/" target={"_blank"}>
                    <i className="fab fa-linkedin"></i>
                    </a>
                    </div>
                    <div className="num text-2xl font-semibold text-center">{lcount}+</div>
                    <div className="down text-lg text-slate-500">Connections</div>
                    </div>
{/* github */}
                    <div className='block'>
                    <div className="text-center">
                    <a href="https://github.com/arin-02" target={"_blank"}>
                    <i className="fab fa-github"></i>
                    </a>
                    </div>
                    <div className="num text-2xl font-semibold text-center">{gcount}+</div>
                    <div className="down text-lg text-slate-500">Projects</div>
                    </div>
{/* twitter */}
                    <div className='block'>
                    <div className="text-center">
                    <a href="https://twitter.com/arinsingh02" target={"_blank"}>
                    <i className="fab fa-twitter"></i>
                    </a>
                    </div>
                    <div className="num text-2xl font-semibold text-center">{tcount}+</div>
                    <div className="down text-lg text-slate-500">Followers</div>
                    </div>
                </div>
                
        </div>
    )
}

export default Mbody
