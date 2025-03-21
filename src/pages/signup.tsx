import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModel";
import axios from "axios";
import { BACKEND_URL } from "../config";

import { useNavigate } from "react-router-dom";

export function Signup(){
       const usernameRef= useRef<HTMLInputElement>(null);
       const [update, setUpdate]=useState(0)

       const handleUsername=()=>{
         setUpdate((p)=>p+1)
       }
       

       const passwordRef=useRef<HTMLInputElement>(null);
       const navigate=useNavigate();

       async function signUp(){
        const username=usernameRef.current?.value;
        console.log(usernameRef.current);
        const password=passwordRef.current?.value;

    await axios.post(BACKEND_URL + "/api/v1/signup", {
            
                username,
                password
            
        })
        alert("you have signed up");
        navigate("/signin")
       }

       
       

    return <div className="flex justify-center items-center w-screen h-screen bg-slate-700">
               <div className="bg-white rounded border  min-w-[400px]"> 
                            <div className="flex p-4 flex-col gap-3 justify-center items-center">
                              <div className="text-lg font-semibold">Sign Up</div>
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Username: </div>
                               <Input ref={usernameRef} placeholder={"username"} onChange={handleUsername}/>
                              
                               </div>
                               {usernameRef.current?.value && usernameRef.current.value.length < 3 && <div className="text-red-800 font-thin">Username must have at least 3 characters</div>}
                               
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Password:</div>
                               <Input  ref={passwordRef} placeholder={"password"}/>
                               
                               </div>


                               <div className="font-thin ">
                                 <ul className="pl-8" >
                                    <li className="list-disc">password must have at least 8 characters.</li>
                                    <li className="list-disc">password must have at least 1 upper case character.</li>
                                    <li className="list-disc">password must have at least 1 lower case character.</li>
                                    <li className="list-disc">password must have at least 1 special  character.</li>
                                    </ul> </div>

                               <Button  loading={false} onClick={signUp} variant={"primary"} size={"sm"} text={"SignUp"} fullWidth={true}/>

                            
                            </div>
               </div>
    </div>
}