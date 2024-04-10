import { Clock, MessageCircle, Notebook, PhoneCall } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="w-3/4 m-auto grid grid-cols-3">
        <div className="col-span-1">
            <div className="mb-5">
                <h2 className="text-3xl text-fourth uppercase font-semibold">contact us</h2>
            </div>
            <div>
                <p className="text-base text-gray-500">So Fit Gym members have 24/7 access to our gym facilities. To join our gym give us a call, send us an email or website contact form, or visit our Pooler location during our staff hours listed below:</p>
            </div>
            <div className="mt-5  ">
                <ul className="flex flex-col gap-3">
                    <li className="flex flex-row">
                        <Clock /> 
                        <div className="flex flex-col ml-3 text-gray-500">                 
                            <p>Staff Hours:</p>
                            <p>Mon - Thurs: 8AM - 6PM</p>
                            <p>Fri: 8AM - 5PM</p>
                            <p>Sat: 8AM - 1PM</p>
                            <p>Sun: 9AM - 12PM</p>
                        </div>
                    </li>
                    <li className="flex flex-row"><MessageCircle /> <p className="ml-3 text-gray-500">frontdesk@sofitgymllc.net</p></li>
                    <li className="flex flex-row"><PhoneCall /> <p className="ml-3 text-gray-500">+(912) 348 -2023</p></li>
                    <li className="flex flex-row"><Notebook /> <p className="ml-3 text-gray-500">1212 US-80, Pooler, GA 31322</p></li>
                </ul>
            </div>
        </div>
        <div className="col-span-2">

        </div>
    </div>
  )
}
