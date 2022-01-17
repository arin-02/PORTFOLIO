import React,{useState,useEffect} from 'react'
import winnergif from './winnergif.gif'

const intialstate=["","","","","","","","",""];

function Tictactoe() {

    const [turn, setTurn] = useState("X");
    const [grid, setGrid] = useState(intialstate);
    const [gameover, setGameover] = useState(false);
    const [gamestate, setGamestate] = useState(0);


    const resetbtn=()=>{
        setGrid(intialstate);

        let rightgrid=document.querySelector(".rightgrid");
        rightgrid.style.display="block";
        
        let winmsg=document.querySelector(".winmsg");
         winmsg.style.display="none";
        setGamestate(0);
        setGameover(false);

    }
    const changeturn=()=>{
        if(turn==="X")
        {
            return setTurn("O");
        }
        else if(turn ==="O")
        {
            return setTurn("X");
        }
    }
    const belowpara=()=>{
       
            if(gamestate===1)
            {

                let ticbelow=document.querySelector(".ticbelow");
                ticbelow.style.display="block";
            }
            else if(gamestate===0)
            {
                let ticbelow=document.querySelector(".ticbelow");
                ticbelow.style.display="none";

            }
            
    }
     useEffect(() => {
         checkwin();
         
             belowpara();

         
     }, [turn,gamestate,resetbtn]);
    
      const checkwin=()=>{
            let wins=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],           
        ]
            wins.forEach((ele,index)=>{
                if(grid[ele[0]]===grid[ele[1]]&&grid[ele[1]]===grid[ele[2]] &&grid[ele[0]]!==""&&grid[ele[1]]!==""&&grid[ele[2]]!=="")
                {
                    

                    let rightgrid=document.querySelector(".rightgrid");
                    rightgrid.style.display="none";
                    
                    let winmsg=document.querySelector(".winmsg");
                    winmsg.style.display="block";
                    setGamestate(1);
                    
                    setGameover(true);
                    
                }
                
                
            })
            
            let boll=grid.every((ele)=>{
                
                if(ele!=="")
                {
                    
                    return true;
                }
                else
                {
                    return false;
                }
                
            })
            if(boll===true)
            {
                let rightgrid=document.querySelector(".rightgrid");
                rightgrid.innerHTML= `GAME DRAW`;
                
            }
            

               
      }

      const afterclick=(e)=>{
         
        if(gameover)
        {
            return;
        }
        let number =e.target.id;
        if(grid[number]==="")
            {
                let newcopygrid=[...grid];
                newcopygrid[number]=turn;
                setGrid(newcopygrid);
                if(!gameover)
                {
                    changeturn();
                }
                
            }
        }
    

    return (
        <>           
             <div id='tictactoeid' className=" heading text-3xl text-center decoration-solid underline decoration-purple-600 text-black-600 font-semibold" style={{fontFamily: "Playfair Display, serif"}}>
                    ARIN's TIC-TAC-TOE
                </div>
                <hr/>
                <br/>
                <div className="bx  flex justify-center ">
                <button className="w-48 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800" onClick={resetbtn}>
                <span className=" w-48 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    RESET
                </span>
                </button>
                </div>
                <br/>
                <div className=" gamestart block text-center">
                <div className="grid  grid-cols-3 block mx-auto w-16  " style={{width:"40%",height:"auto" }}>
                {grid.map((ele,ind)=>{
                        return (
                            <div key ={ind} className={`box text-3xl ${(ind%3===2)?"":"border-r"} ${ind>=6?"":"border-b"} border-black border-solid w-auto  p-4 sm:h-28 h-16 relative hover:bg-sky-100`} id={ind} onClick={afterclick}>
                                {ele}
                            </div>
                        )
                    })}
                </div>
                <br/>
                <div className="rightgrid text-3xl">
                    TURN OF {turn}
                </div>

                <div className="winmsg text-3xl" style={{display:"none"}}>WINNER is {(turn==="X"?"O":"X")}</div>
                </div>
                <div className="ticbelow mx-auto block text-center sm:flex " style={{display:"none"}}>
                <div className="gif m-auto " style={{width:"30%"}}>
                <img src={winnergif} alt="" />
                </div>
                <div className="gifkeright place-self-center">
                
                     <p className='winner font-semibold italic text-xl'> 

                     HURRAAAHHHH!!!!! This honor makes you sparkling in the middle of names and fame. Continue going in your life and accomplish your every dream with your diligent work. congratulations on WINNING THIS GAME.
                     </p>
                </div>
                </div>
                </>

    )
}

export default Tictactoe
