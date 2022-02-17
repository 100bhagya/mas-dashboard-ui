import React from 'react'
import RatingCard from './RatingCard'

const AptitudePreparation = () => {
  return (
    <div className='flex-grow py-10 md:px-20 px-10'>
            <div className=' pb-4 border-b-2 border-[#2255B8]'>
                <div className="text-3xl text-sky-800">
                    Aptitude Preparation
                </div>
                <div className="text-slate-600 text-md">
                    22 february ,2022
                </div>
            </div>
            <div className='mt-2 flex gap-8 pt-10'>
                <p className='px-2 basis-1/2 '>
                Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede. Lunchdisco jigusm vis Annika Lundgren i kosk. Nes belönade med refaliga synmatisk. Nyssa lotesk ASMR plankning komvalens. Pälogi paddeltennis jasminmöte Martin Karlsson i ojesade. Jörgen Axelsson fulbryt majigen. Mjuta antijide. 
                Dinade kusaling ons. Påsm animoji keprenera. Adism osen att mjuta fast bilsurfa är fredsring. Fadöktiga diatt, nomofobi yvåv. Ac-förkylning plankning renas filoskop. Termovalens bev gonnabe kombucha våvarade. Antiling preliga hemire tetranade med syngen. 
                Higt pensionärskuvös och tena. Religa. Gäna bin Ladin-rabatt, politet. Pyst tilig. Ar Bo Sandström infodemi i blandkostare koktiga. Covid-19 vining. Bepynas yde i nenar Lovisa Lundin. 
                </p>
                <div className='basis-1/2 flex gap-6'>
                     <div className='basis-1/2 shadow-xl rounded-xl px-4 py-2'>
                         <span className='text-center block text-[#2255B8] text-lg'> Practice Mode</span>
                         <img src = "https://thumbs.dreamstime.com/z/mobile-learning-abstract-concept-vector-illustration-m-application-portable-device-educational-trend-assignment-individual-plan-196329472.jpg"/>

                     </div>
                     <div className='basis-1/2 shadow-xl rounded-xl px-4'>
                         <span className='text-center block text-[#2255B8] text-lg'>  Practice Mode</span>
                         <img src = "https://thumbs.dreamstime.com/z/mobile-learning-abstract-concept-vector-illustration-m-application-portable-device-educational-trend-assignment-individual-plan-196329472.jpg"/>

                     </div>
                </div>

            </div>
            <div className="text-3xl text-sky-800">
                Priority
                
            </div>
            <span className='text-[#898989] text-md w-full'> 
                Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede. Lunchdisco
                </span>

            <div className='grid grid-cols-3 flex gap-6 justify-between mt-12'>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            </div>
    </div>
  )
}

export default AptitudePreparation