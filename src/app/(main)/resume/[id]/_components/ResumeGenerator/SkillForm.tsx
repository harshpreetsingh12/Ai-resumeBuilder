import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { useAppStore } from '@/zustand';
import React from 'react'

const skills = [
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

const SkillForm = () => {
   const updateSkillsData = useAppStore((state) => state.updateSkillsData);
//    const skills = useAppStore((state) => state.skillsState);

   const handleAddSkill = (e: React.ChangeEvent<HTMLInputElement>) => {

}

  return (
    <div className='px-10 py-5'>
        <div className='flex gap-2 py-5'>
            <Input 
                id="skill"
                className='text-sm'
                placeholder='Add SKills'
            />
            <Button variant={'ghost'} className="text-xs px-4 py-2">Add</Button>
        </div>
        <div className='flex flex-wrap gap-2 py-2'>
            {skills.map((skill,index)=>{
                return (
                    <span className='text-white p-1 px-2 text-xxs rounded-lg bg-blue-600' key={index}>{skill}</span>
                )
            })}
        </div>
    </div>
  )
}

export default SkillForm
