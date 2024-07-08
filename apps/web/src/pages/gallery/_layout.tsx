import gallerybg from '../../assets/images/Gallery-bg.jpg'
import { Outlet } from 'react-router-dom'

export default function _layout() {
  return (
    <div>
    <div>
      <div className="relative w-full h-full">
        <div>
          <img
            src={gallerybg}
            alt="our-services-background"
            className="w-full h-108 bg-fixed bg-center bg-no-repeat bg-cover"
          />
        </div>
        <div className="absolute top-1/2 w-full">
          <h1 className="uppercase text-5xl font-bold text-white flex items-center text-center justify-center">
            gallery
          </h1>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  </div>
  )
}
