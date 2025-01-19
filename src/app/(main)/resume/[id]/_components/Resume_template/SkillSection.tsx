import { format } from 'date-fns'
import React from 'react'
import HexContainer from './HexContainer';
import Headlines from './Headlines';
import { useAppStore } from '@/zustand';

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
  const resumeState = useAppStore((state) => state.resumeState);
  const { colorHex } = resumeState
  
  return (
    <HexContainer>
      <div className='flex w-full flex-col relative justify-between py-3'>
        <Headlines title="Skills"/>
        <div className='flex flex-wrap gap-2 py-2'>
          {SkillsTestData.map((skill,index)=>{
            return (
              <p key={index} style={{backgroundColor:colorHex}} className='text-white p-1 px-2 text-xxs rounded-lg'>{skill}</p>
            )
          })}
        </div>
      </div>
    </HexContainer>
  )
}

export default SkillSection
