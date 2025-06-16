import Image from 'next/image'
import React from 'react'
import GlobalButton from './GlobalButton'

export default function ProductsCard({imgUrl, title}: {imgUrl:string, title:string}) {
  return (
    <div className='flex flex-col justify-center items-center relative gap-4 w-[360px] h-[300px] cursor-pointer group'>
      <div className='w-full relative !h-[220px]'>
        <Image className='object-cover' src={imgUrl} alt='products' fill/>
      </div>
      <div>
        <span className='text-[16px] font-bold transition-all group-hover:text-[#246fcc]'>{title}</span>
      </div>
      <div>
        <GlobalButton text='Vezi produsele'/>
      </div>
    </div>
  )
}
