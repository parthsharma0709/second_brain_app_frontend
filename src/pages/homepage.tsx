import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function HomePage(){
    const navigate=useNavigate();
      function yelo(){
        navigate("/signup")

      }
      function dvd(){
        navigate("/signin")

      }

    return <div className="w-screen flex flex-col h-screen bg-red-400">
        <div className="bg-white flex justify-between p-2">
             <div className="text-lg font-bold font-serif pl-7"> BRAINLY </div>
             <div className="flex gap-8 pr-10">
                <Button onClick={yelo} variant={"primary"} size={"md"} text={"SignUp"} fullWidth={false}/>
                <Button onClick={dvd} variant={"primary"} size={"md"} text={"SignIn"} fullWidth={false}/>
             </div>
        </div>
        <div className="p-2"><h1>Welcome to Brainly – Your Personalized Knowledge Hub!</h1>
        Brainly is a powerful platform designed to help you organize, share, and access your favorite online content effortlessly. Whether it’s YouTube videos, Twitter posts, or educational resources, Brainly lets you curate and manage everything in one place.</div>

    </div>
}