import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModel";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){
           const usernameRef= useRef<HTMLInputElement>(null);
           const passwordRef=useRef<HTMLInputElement>(null);
           const navigate=useNavigate();

           async function signin() {
            const username=usernameRef.current?.value;
            const password=passwordRef.current?.value;

         const response=   await axios.post(BACKEND_URL + "/api/v1/signin" , {
                username,
                password
            })
             
            const jwt =response.data.token;
            localStorage.setItem("token",jwt);
            
            alert("signin successed")
            navigate("/dashboard")

           }

    return <div className="flex justify-center items-center w-screen h-screen bg-gray-600">
               <div className="bg-white rounded border min-w-[400px] p-4"> 
                            <div className="flex p-4 flex-col gap-3 justify-center items-center">
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Username: </div>
                               <Input  ref={usernameRef } placeholder={"username"}/>
                               </div>
                               <div className="flex gap-1 justify-center items-center w-full">
                               <div>Password:</div>
                               <Input ref={passwordRef} placeholder={"password"}/>
                               </div>
                               <Button loading={false} onClick={signin} variant={"primary"} size={"sm"} text={"Signin"} fullWidth={true}/>

                            
                            </div>
               </div>
    </div>
}