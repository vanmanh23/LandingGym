import { Button } from '@/components/ui/button'

interface FlyerProps {
    image: string
}
export default function Flyer({image}: FlyerProps) {
  return (
    <div className="flex flex-col items-center mt-7">
          <div className="mb-5">
            <h3 className="flex text-4xl font-bold text-fourth uppercase z-50">
              <span className="z-20 mr-2 after:content-[''] after:-z-10 after:block after:relative after:-top-4 after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">new</span> this month</h3>
          </div>
          <div>
            <img src={image} alt="explore" />
          </div>
          <div className='mt-5'>
            <Button className='text-base uppercase py-6 px-8'>buy now</Button>
          </div>
        </div>
  )
}
