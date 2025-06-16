import { Check } from 'lucide-react'
import React from 'react'

export default function CheckText({text}:{text:string}) {
  return (
    <div className='flex items-center gap-2'>
      <div className='px-1 rounded-full bg-blue-500'>
        <Check width={14} color='white'/>
      </div>
      <div className='font-[600]'>{text}</div>
    </div>
  )
}
