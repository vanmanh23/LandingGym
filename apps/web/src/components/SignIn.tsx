import { useState } from "react";
import { Button } from "./ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { X } from "lucide-react";

export default function SignIn() {
    const [forcus, setFocus] = useState({email: false, password: false})
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">My Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">

        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>

          <DialogHeader className="border-b border-spacing-2 border-gray-200">
            <DialogTitle className="mb-12"></DialogTitle>
          </DialogHeader>
          <div className=" h-11/12 flex text-center m-auto flex-col">
            <h3 className="text-xl my-6 opacity-60">Ready to go? Let's get started!</h3>
            <div className="relative w-full mt-6">
            <form action="">
                <div className="relative border-b-2 text-lg  mb-7 w-full">
                    <input type="text" className={`w-full outline-none ${forcus.email ? "h-10 border-b-2 border-gray-400" : ""}`} 
                    onFocus={() => setFocus({...forcus, email: true})} 
                    onBlur={() => setFocus({...forcus, email: false})}/>
                    <label className={`absolute left-2 transition opacity-35 duration-300 ease-in-out 
                    ${forcus.email ? "-top-5 text-sm opacity-80" : ""}`} >Email</label>
                </div>
                <div className={`relative border-b-2 text-lg `}>
                    <input type="text" className={`w-full outline-none ${forcus.password ? "h-10 border-b-2 border-gray-400" : ""}`}  
                    onFocus={() => setFocus({...forcus, password: true})} 
                    onBlur={() => setFocus({...forcus, password: false})}/>
                    <label className={`absolute left-2  transition opacity-35 duration-150 ease-in-out 
                    ${forcus.password ? "-top-5 text-sm opacity-80" : ""}`}>Password</label>
                </div>
            </form>
            <div>
              <Button className="w-full mt-7 h-14 bg-black text-white/70 text-base  hover:bg-black hover:text-white rounded-full">Sign In</Button>
            </div>
            <div>
              <p className="underline my-5 cursor-pointer">Need new password?</p>
            </div>
            <div>
              <p className="flex items-center opacity-65 before:content-[''] before:mr-2 before:inline-block before:w-32 before:h-[1px] before:bg-black before:opacity-40
              after:content-[''] after:inline-block after:w-32 after:ml-2 after:h-[1px] after:bg-black after:opacity-40">or</p>
            </div>
            <div>
            <Button className="w-full mt-6 bg-white h-14 text-black text-base border-solid border-2 border-gray-400 hover:bg-white hover:text-black rounded-full">Create Propile</Button>
            </div>
            </div>
          </div>
          <DialogFooter className="border-t w-full border-spacing-2 border-gray-400">
            <div className="flex text-center m-auto flex-col my-6">
              <h2 className="text-sm uppercase opacity-65 w-full">mindbody</h2>
              <p className="text-xs opacity-40">© 2024 MINDBODY Inc.</p>
              <p className="text-xs opacity-40">Privacy Policy and Your Privacy Rights | Terms of Service</p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
