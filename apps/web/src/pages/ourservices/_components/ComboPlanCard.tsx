import React from 'react'


type ComboPlanCardProps = {
    title: string
    benefit: string
    contents: {
        id: number
        content: string
    }[]
}
export default function ComboPlanCard({title, benefit, contents}: ComboPlanCardProps) {
  return (
    <div className='flex flex-col gap-5 md:w-2/5 w-9/12 bg-white'>
        <div>
            <div className='flex justify-center items-center text-center bg-primary h-12'><p className='text-thirdary capitalize'>{title}</p></div>
            <div className='flex justify-center items-center text-center py-4 text-xl opacity-60'><p>{benefit}</p></div>
            <div className='w-10/12 m-auto py-2 text-center'>
                <ul>
                    {contents.map((item, index) => (
                        <li key={index} className='mb-3 opacity-60'>{item.content}</li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center mb-8'><p className='text-primary text-lg font-semibold underline'>registed now</p></div>
        </div>

    </div>
  )
}
