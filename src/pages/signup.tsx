import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModel";
import axios from "axios";
import { BACKEND_URL } from "../config";

import { useNavigate } from "react-router-dom";

export function Signup(){
       const usernameRef= useRef<HTMLInputElement>(null);
       
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

    return <div className="flex justify-center items-center w-screen h-screen bg-gray-600">
               <div className="bg-white rounded border min-w-[400px]"> 
                            <div className="flex p-4 flex-col gap-3 justify-center items-center">
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Username: </div>
                               <Input ref={usernameRef} placeholder={"username"}/>
                               </div>
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Password:</div>
                               <Input ref={passwordRef} placeholder={"password"}/>
                               </div>
                               <Button loading={false} onClick={signUp} variant={"primary"} size={"sm"} text={"SignUp"} fullWidth={true}/>

                            
                            </div>
               </div>
    </div>
}