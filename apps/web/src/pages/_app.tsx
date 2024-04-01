import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout(){
    const background = "https://bridge153.qodeinteractive.com/wp-content/uploads/2018/02/background-large.jpg"
  return (
    <div style={{ backgroundImage: `url(${background})` }}>    
    <div className="bg-transparent"><Navigation /></div>
    <div>
        <Outlet></Outlet>
    </div>
    </div>
  )
}
