import React, { ReactNode } from 'react'

export default function PageContainer({className, children} : {className?:string, children:ReactNode}) {
  return (
    <div className={`${className} w-full px-6 lg:px-0 max-w-full md:max-w-[1180px]`}>
      {children}
    </div>
  )
}
