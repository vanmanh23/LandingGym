
type BenefitsProps = {
    title: string,
    icon: string,
    content: string,
    description: string,
}
export default function BenefitCard({title, icon, content, description}: BenefitsProps) {
  return (
    <div className='flex flex-col md:w-80 w-11/12 md:mb-0 mb-8'>
        <div className='mb-7'>
            <h3 className='text-2xl font-bold text-fourth'>{title}</h3>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='w-full h-full'>
                <img src={icon} alt="icon" className='w-full h-full'/>
            </div>
            <div className='flex flex-col'>
                <div className='mb-3'><h4 className='text-xl font-semibold'>{content}</h4></div>
                <div>{description}</div>
            </div>
        </div>
    </div>
  )
}
