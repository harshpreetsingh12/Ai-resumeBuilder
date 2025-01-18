import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HexContainer from './HexContainer'
import Headlines from './Headlines'

type ProjectType={
  projectName: string,
  projectLink: string,
  content:string[],
  skillesUsed: string[]
}

const TestingData=[
  {
    projectName: "Uber Clone",
    projectLink: "https://yoursavior.netlify.app/",
    content:[
      'Developed workflow management features allowing teams to collaborate',
      'Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.'
    ],
    skillesUsed:['Javacript', "React", "Next"]
  },
  {
    projectName: "Loom 2.0",
    projectLink: "https://yoursavior.netlify.app/",
    content:[
        'Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.',
        'Developed workflow management features allowing teams to collaborate',
    ],
    skillesUsed:['Javacript', "React", "Next"]
  },
]

const ProjectSection = () => {
  return (
    <HexContainer>
      <div className='flex w-full flex-col relative justify-between py-3'>
        <Headlines title="Projects"/>
        <div className='flex flex-col gap-1'>
          {TestingData.map((project,index)=>{
            return <ProjectCard key={index} project={project}/>
          })}
        </div>
      </div>
    </HexContainer>
  )
}

export default ProjectSection

type ProjectCardType={
    project:ProjectType,
}

const ProjectCard= ({ project } :ProjectCardType) =>{
  const {projectName, projectLink, skillesUsed, content}=project
  
  return (
    <div className=' py-2'>
      <div className='flex justify-between pb-1'>
        <h2 className='text-xs font-bold'>{projectName} &nbsp; &nbsp;
            {skillesUsed.map((skill:string, index:number)=>{
                return (
                    <span className='font-normal' key={`skill_${index}`}> &bull; {skill}</span>
                )
            })}
        </h2>
        <p className='text-xs font-bold'>
            <Link target='__blank' href={projectLink} className='cursor-pointer'>
                <Link2 className={'text-sm text-blue-600'} size={12}/>
            </Link>
        </p>
      </div>
      <div className='flex flex-col'>
        {content.map((content:any,index:number)=>{
          return (
            <p key={`content_${index}`} className='text-xs'>- {content} </p>
          )
        })}
      </div>
    </div>
  )
}