import { useAppStore } from '@/zustand';
import React from 'react'
import Image from 'next/image'

const ResumeHead = () => {
    const resumeState = useAppStore((state) => state.resumeState);
    const { photoUrl, firstName, lastName, jobTitle,city,country, phone, email  } = resumeState
    return (
        <div className='flex w-full relative justify-between border-b-2 border-b-gray-400 py-3'>
            <div className='flex flex-col gap-1 justify-center'>
                <h1 className='font-bold text-1xl text-black'>{firstName} {lastName}</h1>
                <h3 className='text-black text-sm'>{jobTitle}</h3>
                <p className='text-gray-500 text-xs'>{city} {country} &bull; {phone} &bull; {email}</p>
            </div>

            <Image
                src={photoUrl || "/userImage.png"}
                alt="Picture of the author"
                width={80}
                height={80}
                className='rounded-full'
            />
        </div>
    )
}

export default ResumeHead
