import { format } from 'date-fns'
import React from 'react'

const SkillsTestData = [
    "JavaScript ES6",
    "TypeScript",
    "React.js",
    "React Native",
    "Redux",
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Github",
    "JSON Web Token",
    "RESTful APIs",
    "NPM",
    "Node.js",
    
];


const SkillSection = () => {
  return (
    <div className='flex w-full flex-col relative justify-between border-b-2 border-b-gray-400 py-3'>
      <h1 className='text-black text-sm font-bold'>Skills</h1>
      <div className='flex flex-wrap gap-2 py-2'>
        {SkillsTestData.map((skill,index)=>{
          return (
            <p key={index} className='bg-black text-white p-1 px-2 text-xxs rounded-lg'>{skill}</p>
          )
        })}
      </div>
    </div>
  )
}

export default SkillSection
