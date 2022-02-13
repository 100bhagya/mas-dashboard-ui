import React , { useState } from 'react'

const Sidebar = ( {sidebarOpen}) => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = {
        Active: {
            transform: 'rotate(0deg)'
        },
        Inactive: {
            transform: 'rotate(180deg)'
        },
        visible: {
            display: "none"
        },
        hidden: {
            display: "flex",
        }
    }



    return (
        <>
          <div className = {`basis-1/5 bg-blue-200 md:top-0 top-8 w-full transition duration-700 ease-in-out md:relative absolute md:-translate-x-0 ${sidebarOpen ? "-translate-x-full":""}`}>
                    <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" class="rounded-full h-24 m-auto mt-12" alt="" />
                    <h2 className="text-center mt-5 text-sky-500"> Lorem impus </h2>
                    <h2 className="text-center text-gray-600"> Lorem impus@email.com </h2>

                    <div className="flex justify-center p-2 mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Home
                        </h3>

                    </div>
                    <div className="flex justify-center p-2 flex-col">
                        <div className="flex justify-center " onClick={() => setIsOpen(!isOpen)} >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 ml-4" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            <h3 className="w-1/2 mt-2 text-center"> tasks</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" style={isOpen ? styles.Active : styles.Inactive} >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        <div className={`w-full  justify-center mt-5 transition duration-200 ease-in-out transform ${isOpen ? " flex":" hidden"}`}   >
                            <div style={{
                                borderLeft: "2px solid grey",
                            }}></div>
                            <div className="flex-col flex w-1/2 mx-3 text-cyan-800" >
                                <h3>
                                    word of the day
                            </h3>
                                <h3>
                                    word of the day
                            </h3>
                                <h3>
                                    word of the day
                            </h3>
                                <h3>
                                    word of the day
                            </h3>
                                <h3>
                                    word of the day
                            </h3>
                                <h3>
                                    word of the day
                            </h3>

                            </div>

                        </div>



                    </div>
                    <div className="flex justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Settings
                        </h3>

                    </div>
                    <div className="flex justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Notice Board
                        </h3>

                    </div>
                    <div className="flex justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Timeline
                        </h3>

                    </div>
                    <div className="flex justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Exams
                        </h3>

                    </div>
                    <div className="flex justify-center p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Forum
                        </h3>

                    </div>
                    <div className="divide-y-8">

                    </div>
                    <div className="flex justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <h3 className="w-1/2 mt-2 text-center"> Logout
                        </h3>

                    </div>

                </div>  
            {/* <button>btn </button> */}
        </>
    )
}

export default Sidebar
