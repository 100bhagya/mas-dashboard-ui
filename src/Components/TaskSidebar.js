import React from 'react'

const TaskSidebar = ({taskSidebar}) => {
  return (
    <div className={`basis-1/5 bg-[#EDF3FF] shrink-0 h-screen flex items-center gap-5 px-5 pt-24 pl-8 flex-col md:relative absolute w-full transition md:transform-none ease-in-ut duration-300 ${taskSidebar ? "-translate-x-0":"-translate-x-full"}`}>
        <div className='flex items-center md:justify-start justify-center w-full py-6 text-[#2255B8]'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        <div className=' text-2xl font-bold pl-3'> Tasks</div>
        </div>
        <ul className='relative md:w-full '>
            <li className='text-[#2255B8] font-bold py-4'>
                Word of tha day
            </li>
            <li className='text-[#5475B4] py-4'>
               Summary writing
            </li>
            <li className='text-[#5475B4] py-4'>
                Tech Articles
            </li>
            <li className='text-[#5475B4] py-4'>
                Word of tha day
            </li>
            <li className='text-[#5475B4] py-4'>
                Word of tha day
            </li>
            <li className='text-[#5475B4] py-4'>
                Word of tha day
            </li>
        </ul>
    </div>
  )
}

export default TaskSidebar