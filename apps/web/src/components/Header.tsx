import { Button } from './ui/button'
import backgroundimage from '../assets/images/background.png'

export default function Header() {
  const videosrc = "https://www.sofitgympooler.com/wp-content/uploads/2022/08/Tour-2022.mp4"
  return (
    <div className="w-full h-screen relative ">
        <div className='md:absolute top-0 left-0 w-full h-full'>
          <div className='hidden md:block h-5/6'>
          <video autoPlay loop muted className='w-full h-full object-cover'>
            <source src={videosrc} type="video/mp4" />
          </video>
          </div>
          <div className='md:hidden relative'>
            <div>
              <img src={backgroundimage} alt='background_image'/>
            </div>
            <div className='absolute top-6 left-0  w-full'>
            <div className='flex items-center justify-center text-center'>
              <div className='text-5xl font-bold text-white uppercase w-fit'>
                <span className='z-10 relative inline-block after:content-[""] after:block after:relative  after:z-[-1] after:h-6 after:-top-5 after:-left-2 after:w-40 after:bg-gradient-to-r after:from-thirdary after:to-secondary'>
                  more than 
                  </span><h2 className='-mt-4'>just a gym</h2> </div>
            </div>
            <div className='flex items-center justify-center'>
              <Button className='mt-6 text-base font-bold uppercase h-14 w-36'>join our gym</Button>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}
