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

    return <div className="w-screen flex flex-col justify-center items-center h-screen bg-slate-700">
       
        <div>
          <h1 className="flex justify-center items-center text-gray-200 font-bold text-2xl mb-4">SECOND BRAIN</h1>
        </div>
        <div className="w-[500px] h-[400px] border-2 rounded flex flex-col p-3 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl ">
        <p className="text-lg text-gray-300 text-center mt-3">
          Your Knowledge, Organized.
        </p>
        <p className="mt-4 text-gray-400 text-lg text-center">
          Store your tweets, YouTube videos, and content in one place. 
          Organize, access, and share your insights effortlessly.
        </p>
       <div className=" p-5 flex flex-col justify-center items-center ">
       <p className="mb-2 text-gray-300">Already a User? Please SignIn...</p> <hr/>
       <div><Button variant="primary" text="SignIn" onClick={dvd} ></Button></div>
       </div>
       <div className=" p-5 flex flex-col justify-center items-center ">
       <p className="mb-3 text-gray-300">First time ? Please Sign Up to get started...</p> <hr/>
       <div><Button variant="primary" text="SignUp" onClick={yelo} ></Button></div>
       </div>

        </div>

    </div>



    
      
}