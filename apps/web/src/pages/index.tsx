import Header from "@/components/Header"
import IntroCustom from "@/components/IntroCustom"
import Introduction from "@/components/Introduction"
import ContactUs from "@/components/contact/ContactUs"
import Feedback from "@/components/feedback/Feedback"
import GoogleMap from "@/components/index/GoogleMap"
import ProTrainer from "@/components/index/ProTrainer"
import Schedule from "@/components/schedule/Schedule"

export default function Component() {
  const background = "https://bridge153.qodeinteractive.com/wp-content/uploads/2018/02/background-large.jpg"
  return (
    <div style={{ backgroundImage: `url(${background})` }}> 
       <div><Header /></div>
    <div className="w-full relative -top-44">
      <Introduction />
    </div>
    <div>
      <IntroCustom />
    </div>
    <div>
      <Schedule /> 
    </div>
    <div>
      <Feedback />
    </div>
    <div>
      <ProTrainer />
    </div>
    <div className="mt-10">
      <GoogleMap />
    </div>
    <div>
      <ContactUs />
    </div>
    </div>
  )
}


