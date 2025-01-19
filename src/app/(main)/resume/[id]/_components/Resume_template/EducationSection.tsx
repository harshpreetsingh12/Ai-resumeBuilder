import { format } from 'date-fns'
import React from 'react'
import Headlines from './Headlines'

type EducationType={
  courseName: string,
  schoolName: string,
  startDate: Date,
  endDate: Date | string,
  content:any
}

const TestingData=[
  {
    courseName: "Bachelors of Computer Applications",
    schoolName: "Shri Guru Ram Rai University",
    startDate: new Date("2020-06-10T17:00:30.855"),
    endDate: new Date("2023-06-10T17:00:30.855"),
    content:[
      'Got 8.12 in my last acadameic session',
    ],
  },
  {
    courseName: "Masters of Computer Applications",
    schoolName: "Graphicera University",
    startDate:new Date("2024-06-10T17:00:30.855"),
    endDate: "Present",
    content:[
      'Participated in various competitions and secured good positions',
    ]
  }
]
const EducationSection = () => {
  return (
    <div className='flex w-full flex-col relative justify-between py-3'>
      <Headlines title="Education"/>
      <div className='flex flex-col gap-1'>
        {TestingData.map((education,index)=>{
          return <ExperienceCard key={index} education={education}/>
        })}
      </div>
    </div>
  )
}

export default EducationSection

type EducationCardType={
  education:EducationType,
}

const ExperienceCard= ({ education } :EducationCardType) =>{
  const {content, courseName,schoolName, startDate, endDate}=education
  return (
    <div className=' py-2'>
      <div className='flex justify-between pb-1'>
        <h2 className='text-black text-xs font-bold'>{courseName}</h2>
        <p className='text-black text-xs font-bold'>{format(new Date(startDate), "MMM yyyy") } - {endDate==='Present'? endDate : format(new Date(endDate), "MMM yyyy")}</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-black text-xs mb-1'>{schoolName}</h2>
        {content.map((content:any,index:number)=>{
          return (
            <p key={index} className='text-black text-xs'>- {content} </p>
          )
        })}
      </div>
    </div>
  )
}