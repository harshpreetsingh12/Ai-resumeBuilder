import React from 'react'

const SummaryTestData = [
    "I am a Frontend Engineer with nearly 2 years of experience working closely with a wide range of tech stacks. I believe I would be a great fit for this role because I have been deeply involved in various phases of the development lifecycle. I am capable of both leading a team and continuously improving my own skills."
];


const SummarySection = () => {
  return (
    <div className='flex w-full flex-col relative justify-between border-b-2 border-b-gray-400 py-3'>
      <h1 className='text-black text-sm font-bold'>Summary</h1>
      <div className='flex flex-wrap gap-2 py-2'>
        <p className='text-black text-xs rounded-lg'>{SummaryTestData}</p>
      </div>
    </div>
  )
}

export default SummarySection
