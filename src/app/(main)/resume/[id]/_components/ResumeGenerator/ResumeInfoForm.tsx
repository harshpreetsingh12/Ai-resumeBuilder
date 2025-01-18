import { Input } from '@/components/ui/input'
import React from 'react'

const ResumeInfoForm = () => {
  return (
    <div className='p-10'>
        <div className='space-y-2'>
            <label htmlFor='balance' className='text-sm font-medium'>Title</label>
            <Input 
                id="title"
                placeholder='Eg: Frontend Engineer Resume'
            />
        </div>
    </div>
  )
}

export default ResumeInfoForm
