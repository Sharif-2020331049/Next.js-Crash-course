
import natureImage from '@/public/images/nature.jpg'
import Button from '@/app/components/Button'
import React from 'react'
import Image from 'next/image'


function Mission() {
  return (
    <div className="mt-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        This is mission page.
      
       <div className='w-[800px]'>
         <Image placeholder='blur' src={natureImage} alt='Nature Image'/>
       </div>
       <Button/>
      </main>
    </div>
  )
}

export default Mission