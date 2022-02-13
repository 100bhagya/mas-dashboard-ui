import React from 'react'

import CourseCard from './CourseCard'
import NotificationBar from './NotificationBar'

const Content = () => {
    return (
        <div className = "basis-3/5">
            <div className ="md:p-10 p-6">
                <div className="text-3xl text-sky-800">
                    Hello, Lorem
                </div>
                <div className = "text-slate-600">
                    22 february ,2022
                </div>
                <div style = {{
                    borderTop: "2px solid blue", marginTop: "0.5rem"
                }} >
                </div>
                <div className="text-xl text-sky-800 mt-5">
                    Latest test Performance
                </div>
                
                <div id = "performanceCard" className="grid grid-cols-5 gap-4 md:p-10 p-6 shadow-xl">
                    <div>
                       <div className = "md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                           Tech
                       </div> 
                       <div className = "md:text-2xl text-lg text-sky-800 mt-4">
                        #18 
                        </div>
                       <div className = "md:text-md text-sm">
                         10 Nov
                        </div>
                    </div>
                    <div>
                       <div className = "md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                           Tech
                       </div> 
                       <div className = "md:text-2xl text-lg text-sky-800 mt-4">
                        #18 
                     </div>
                     <div className = "md:text-md text-sm">
                        10 Nov
                       </div>
                    </div>
                    <div>
                       <div className = "md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                           Tech
                       </div> 
                       <div className = "md:text-2xl text-lg text-sky-800 mt-4">
                        #18 
                    </div>
                    <div className = "md:text-md text-sm">
                        10 Nov
                       </div>
                    </div>
                    <div>
                       <div className = "md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                           Tech
                       </div> 
                       <div className = "md:text-2xl text-lg text-sky-800 mt-4">
                        #18 
                    </div>
                    <div className = "md:text-md text-sm">
                        10 Nov
                       </div>
                    </div>
                    <div>
                       <div className = "md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                           Tech
                       </div> 
                       <div className = "md:text-2xl text-lg text-sky-800 mt-4">
                        #18 
                    </div>
                    <div className = "md:text-md text-sm">
                        10 Nov
                       </div>
                    </div>
                
            </div>
            <div >
                 <div className="text-xl text-sky-800 my-10">
                   Course completion
                </div>
                <div className = "grid md:grid-cols-3 grid-cols-1 gap-6">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
            <div>
                 <div className="text-xl text-sky-800 my-10">
                  Notification
                </div>
                <div className = "shadow-lg rounded-2xl">
                    <NotificationBar/>
                    <NotificationBar/>
                    <NotificationBar/>

                </div>


            </div>
            </div>
        </div>
    )
}
export default Content