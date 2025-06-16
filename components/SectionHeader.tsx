import React from 'react'

export default function SectionHeader({text, width}:{text:string,width:string}) {
  return (
    <div className={`border-b-1 font-bold text-[14px] border-[#7575756e] text-[#757575] rounded-[0_0_2px_2px] !inline py-3 px-3 !w-[${width}]`}>
      {text}
    </div>
  )
}
