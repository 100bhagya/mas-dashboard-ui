import React , { useState } from 'react'

const Sidebar = ( {sidebarOpen}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [barOpen, setBarOpen] = useState(false);
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
          <div className = {`bg-[#EDF3FF] md:top-0 h-[150vh] top-8 w-full transition duration-700 ease-in-out md:relative absolute md:-translate-x-0 ${sidebarOpen ? "-translate-x-full":""} ${barOpen ? "basis-1/12":"basis-1/5"}`} id="sidenavSecExample">
                    <div className={`${barOpen? "hidden":""}`}>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className={` rounded-full h-24 m-auto mt-12 }`} alt="" />
                    <h2 className="text-center mt-5 text-sky-500"> Lorem impus </h2>
                    <h2 className="text-center text-gray-600"> Lorem impus@email.com </h2>
                    </div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFCHnj6UaTeCw/company-logo_200_200/0/1631721743928?e=1652918400&v=beta&t=zFMzsSoBtUSVD-4xe4vPjPrMbEWawYYkNAsLBTK8eio" className={` rounded-full h-12 my-16 m-auto ${barOpen?"":"hidden"} }`} alt="" />
                    <ul className='relative px-5 mt-4'>
                        <li className={`relative py-4 m-auto  text-center justify-center ${barOpen ?"flex":"hidden"}`}>  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10 m-auto" alt="Avatar"/>
        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 hover:text-[#2255B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
                         <span className={`px-6  ${barOpen ? "hidden":""}`}> Home</span>

                            </div>

                        </li>
                        <li className='relative py-4' id = "taskBar">
                            <div className='flex items-center px-12 overflow-hidden  text-ellipsis whitespace-nowrap hover:text-[#2255B8] hover:font-bold'  onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 hover:text-[#2255B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
</svg>
                         
                         <span className={`px-6  ${barOpen ? "hidden":""}`}> Tasks</span>
                         <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4 ml-auto relative left-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>

                            </div>
                            <div className={`w-full  justify-center mt-5 transition duration-200 ease-in-out transform ${isOpen ? " flex":" hidden"}`}   >
                            <div className={`flex flex-col border-[#7379A3] border-l-2 ${barOpen ? "px-2":"px-10"}`}>
                                <h3> word of the day</h3>
                                <h3> word of the day</h3>
                                <h3> word of the day</h3>
                                <h3> word of the day</h3>
                                <h3> word of the day</h3>
                            </div>

                        </div>

                        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                         <span className={`px-6 ${barOpen ? "hidden":""}`}> Notice board</span>

                            </div>

                        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                         </svg>
                         <span className={`px-6  ${barOpen ? "hidden":""}`}> Items </span>

                            </div>

                        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 " fill="none" viewBox="0 0 25 25" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                         </svg>
                         <span className={`px-6  ${barOpen ? "hidden":""}`}> Setting</span>

                            </div>

                        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
                         <span className={`px-6 ${barOpen ? "hidden":""}`}> Exam</span>

                            </div>

                        </li>
                        <li className='relative py-4'>
                            <div className='flex items-center px-12 hover:text-[#2255B8] hover:font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>
                         <span className={`px-6 ${barOpen ? "hidden":""}`}> Exam</span>

                            </div>

                        </li>
                        <li className='relative py-4 top-10 my-4 border-t-2 hover:text-[#2255B8] hover:font-bold'>
                            <div className='flex items-center px-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg>
                         <span className={`px-6 ${barOpen ? "hidden":""}`}> Log out</span>

                            </div>

                        </li>

                    </ul>


                </div>  
                <button className={`bg-[#EDF3FF] h-10 w-9 rounded-r-md top-1/2 relative hidden md:block `} onClick={()=> setBarOpen(!barOpen)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${barOpen? "rotate-180":""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
        </>
    )
}

export default Sidebar
