import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";
import Getittouch from "@/components/Get_it_touch";
export default function Layout(){
    const background = "https://bridge153.qodeinteractive.com/wp-content/uploads/2018/02/background-large.jpg"
  return (
    <div style={{ backgroundImage: `url(${background})` }}>    
    <div className="bg-transparent"><Navigation /></div>
    <div>
        <Outlet></Outlet>
    </div>
    <div className="fixed bottom-3 right-3">
      <Getittouch />
    </div>
    <div className="w-full mt-10">
      <Footer />
    </div>
    </div>
  )
}
