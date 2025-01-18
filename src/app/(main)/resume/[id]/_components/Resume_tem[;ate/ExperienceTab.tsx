import { format } from 'date-fns'
import React from 'react'

type ExperienceType={
  position: string,
  companyName: string,
  startDate: Date,
  endDate: Date | string,
  content:any
}

const TestingData=[
  {
    position: "Software Engieer",
    companyName: "i-Resonate",
    startDate: new Date("2025-03-10T17:00:30.855"),
    endDate: new Date("2022-05-10T17:00:30.855"),
    content:[
      ' Created a user-centric UI/UX for seamless barter transactions between customers and companies.',
      'Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.'
    ]
  },
  {
    position: "Software Engieer",
    companyName: "i-Resonate",
    startDate:new Date("2025-03-10T17:00:30.855"),
    endDate: "Present",
    content:[
      'Engineered and integrated live marketing applications with major social media',
      ' platforms (Facebook, LinkedIn, Instagram), streamlining user interactions and enhancing ',
      'Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.'
    ]
  }
]
const ExperienceTab = () => {
  return (
    <div className='flex w-full flex-col relative justify-between border-b-2 border-b-gray-400 py-3'>
      <h1 className='text-black text-sm font-bold'>Work Experience</h1>
      <div className='flex flex-col gap-1'>
        {TestingData.map((experience,index)=>{
          return <ExperienceCard key={index} experience={experience}/>
        })}
      </div>
    </div>
  )
}

export default ExperienceTab

type ExperienceCardType={
  experience:ExperienceType,
}

const ExperienceCard= ({ experience } :ExperienceCardType) =>{
  const {content, position,companyName, startDate, endDate}=experience
  return (
    <div className=' py-2'>
      <div className='flex justify-between pb-1'>
        <h2 className='text-xs font-bold'>{position}</h2>
        <h2 className='text-xs font-bold'>{format(new Date(startDate), "MMM yyyy") } - {endDate==='Present'? endDate : format(new Date(endDate), "MMM yyyy")}</h2>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xs mb-1'>{companyName}</h2>
        {content.map((content:any,index:number)=>{
          return (
            <p key={index} className='text-xs'>- {content} </p>
          )
        })}
      </div>
    </div>
  )
}