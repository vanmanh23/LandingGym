import { contactUsSchema } from "@/utils/schema";
import { Clock, MessageCircle, Notebook, PhoneCall } from "lucide-react";
import { Form } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "../ui/button";
import { useForm } from "react-hook-form"
import { useState } from "react";

export default function ContactUs() {
    const [focus, setFocus] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        resolver: zodResolver(contactUsSchema),
      });
    const handleFocus = (field: string) => {
        setFocus({
          ...focus,
          [field]: true,
        });
    }
    const handleBlur = (field: string) => {
        setFocus({
          ...focus,
          [field]: false,
        });
    }
    console.log("focus", focus)
  return (
    <div className="w-3/4 m-auto grid md:grid-cols-3 grid-cols-1">
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
        <div className="col-span-2 md:mt-0 mt-7 md:ml-10" >
             <Form className="w-full" onSubmit={handleSubmit(data => console.log(data))}>
                <div className="mb-5">
                <label className="w-1/5">First name</label>
                <input {...register('firstName', {required: true})} onFocus={() => handleFocus('firstName')} onBlur={() => handleBlur('firstName')} placeholder="First Name" type="text" className={`${focus.firstName ? "border-2 border-primary" : "border-0"} ml-3 w-3/6 rounded-lg h-8 outline-none`}/>
                {errors.firstName?.message && <p className="text-red-500">{errors.firstName?.message.toString()}</p>}
                </div>
                <div className="mb-5">
                <label className="w-1/5">Last name</label>
                <input {...register('lastName', {required: true})} onFocus={() => handleFocus('lastName')} onBlur={() => handleBlur('lastName')} placeholder="Last Name" type="text" className={`${focus.lastName ? "border-2 border-primary" : ""} ml-3 w-3/6 rounded-lg h-8 outline-none`}/>
                {errors.lastName?.message && <p className="text-red-500">{errors.lastName?.message.toString()}</p>}
                </div>
                <div className="mb-5">
                <label>Email</label>
                <input {...register('email', {required: true})} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} placeholder="Email" type="email" className={`${focus.email ? "border-2 border-primary" : ""} ml-3 w-3/6 rounded-lg h-8 outline-none`}/>
                {errors.email?.message && <p className="text-red-500">{errors.email?.message.toString()}</p>}
                </div>
                <div className="mb-5">
                <label>Phone Numbers</label>
                <input {...register('phoneNumber')} onFocus={() => handleFocus('phoneNumber')} onBlur={() => handleBlur('phoneNumber')} placeholder="Phone number" type="text" className={`${focus.phoneNumber ? "border-2 border-primary" : ""} ml-3 w-3/6 rounded-lg h-8 outline-none`}/>
                {errors.phoneNumber?.message && <p className="text-red-500">{errors.phoneNumber?.message.toString()}</p>}
                </div>
                <div className="mb-5">
                <Button type="submit">submit</Button>
                </div>
            </Form> 
        </div>
    </div>
  )
}
