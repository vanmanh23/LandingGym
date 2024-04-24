import { Outlet } from "react-router-dom";

import ourservicesBg from "../../assets/images/our-service/bg.jpg";
export default function Layout() {
  return (
    <div>
      {/* <div className="bg-transparent">
        <Navigation />
      </div> */}

      <div>
        <div className="relative w-full h-full">
          <div>
            <img
              src={ourservicesBg}
              alt="our-services-background"
              className="w-full h-108"
            />
          </div>
          <div className="absolute top-1/2 w-full">
            <h1 className="uppercase text-5xl font-bold text-white flex items-center text-center justify-center">
              our services
            </h1>
          </div>
        </div>
        <div className="w-9/12 m-auto mt-5 mb-10">
          <p className="text-center font-medium text-xl opacity-65">
            Join a local gym in Pooler, Georgia, that understands your needs. So
            Fit Gym gives you access to high-quality equipment, local personal
            trainers, and the ability to join fun workout classes!
          </p>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>

      {/* <div className="w-full mt-10">
        <Footer />
      </div> */}
    </div>
  );
}
