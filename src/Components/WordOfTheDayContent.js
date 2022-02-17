import React from 'react'
import Calendar from "../Components/Calender/Calender";

const WordOfTheDayContent = () => {
    return (
        <div className='flex-grow py-10 md:px-20 px-10'>
            <div className=' pb-4 border-b-2 border-[#2255B8]'>
                <div className="text-3xl text-sky-800">
                    Word of The Day Content
                </div>
                <div className="text-slate-600 text-md">
                    22 february ,2022
                </div>

            </div>
            <div className='md:flex mt-8 gap-4'>
                <div className='basis-4/5 flex flex-col'>
                    <div className='py-4 px-8  rounded-lg shadow-xl my-3'>
                        <h3 className='text-xl text-[#2255B8] py-2'>
                            Analytics
                        </h3>
                        <p className='py-2 text-[#898989]'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <input placeholder = "Let’s make a sentence out of the word !" type="text" id="large-input" className="block p-4 w-full bg-[#EDF3FF] text-grey-900 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <div className='text-right mt-3'>
                    <button className='py-2 px-6 text-white rounded-xl bg-[#2255B8]'> Submit</button>
                    </div>
                    </div>
                    <div className='py-4 px-8  rounded-lg shadow-xl my-3'>
                        <h3 className='text-xl text-[#2255B8] py-2'>
                            Statistice
                        </h3>
                        <p className='py-2 text-[#898989]'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <input placeholder = "Let’s make a sentence out of the word !" type="text" id="large-input" className="block p-4 w-full bg-[#EDF3FF] text-grey-900 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <div className='text-right mt-3'>
                    <button className='py-2 px-6 text-white rounded-xl bg-[#2255B8]'> Submit</button>
                    </div>
                    </div>

                </div>
                <div className='basis-1/5'>
                {/* <div inline-datepicker data-date="02/25/2022"></div> */}
                <Calendar/>
                </div>
            </div>

        </div>

  )
}

export default WordOfTheDayContent