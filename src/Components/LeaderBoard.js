import React from 'react'

const LeaderBoard = ({lederboardOpen}) => {
    return (
        <div className  =  {`basis-1/5 bg-blue-200 top-8 md:top-0 md:relative w-full transition duration-700 ease-in-out absolute md:-translate-x-0 ${lederboardOpen ? "translate-x-full":""}`}>
            <div className = "p-2  ">
                <div className = "flex p-4 justify-between border-b-2 border-b-blue-800 text-blue-600 text-lg">
                    <div className = "w-12"></div>
                    <div> Name </div>
                    <div> Score </div>
                    <div> Rank </div>
                </div>
                <div className = "flex p-4 justify-between"> 
                    <img className = "w-12 h-12 rounded-full shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" />
                    <div> Lorem </div> 
                    <div> 24/7 </div> 
                    <div> 1 </div> 
                </div>
                <div className = "flex p-4 justify-between"> 
                    <img className = "w-12 h-12 rounded-full shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" />
                    <div> Lorem </div> 
                    <div> 24/7 </div> 
                    <div> 1 </div>
                </div>
                <div className = "flex p-4 justify-between"> 
                    <img className = "w-12 h-12 rounded-full shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" />
                    <div> Lorem </div> 
                    <div> 24/7 </div> 
                    <div> 1 </div> 
                </div>
                <div className  = "flex justify-center gap-1 my-3">
                
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                 </div>  
                <div className = "flex p-4 justify-between bg-sky-500 rounded-md"> 
                    <img className = "w-12 h-12 rounded-full shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" />
                    <div> Lorem </div> 
                    <div> 24/7 </div> 
                    <div> 1 </div> 
                </div>
                <div className = "flex p-4 justify-between"> 
                    <img className = "w-12 h-12 rounded-full shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" />
                    <div> Lorem </div> 
                    <div> 24/7 </div> 
                    <div> 1 </div> 
                </div>

            </div>
        </div>
    )
}

export default LeaderBoard
