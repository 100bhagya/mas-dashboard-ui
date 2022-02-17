import React, {useState} from 'react'
import TaskSidebar from '../Components/TaskSidebar'
import WordOfTheDayContent from '../Components/WordOfTheDayContent'
import SummaryWritingContent from '../Components/SummaryWritingContent'
import TechArticles from '../Components/TechArticles'
import AptitudePreparation from '../Components/AptitudePreparation'
import NonTechPrep from '../Components/NonTechPrep'
import Quizes from '../Components/Quizes'

const Tasks = () => {
const [taskSidebar, setTaskSidebar] = useState(false)
  return (
    <div className='md:flex '>
         <nav className = "bg-slate-600 md:hidden flex justify-between p-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick = {()=> setTaskSidebar(!taskSidebar)}>
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
            </nav>        
        <TaskSidebar taskSidebar = {taskSidebar}/>
        {/* <WordOfTheDayContent/> */}
        {/* <SummaryWritingContent/> */}
        {/* <TechArticles/> */}
        {/* <AptitudePreparation/> */}
        {/* <NonTechPrep/> */}
        <Quizes/>
    </div>
  )
}

export default Tasks