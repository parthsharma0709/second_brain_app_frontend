import { useNavigate } from "react-router-dom";
import { BrainIcon } from "../icons/brain-icon";
import { SideBarItems } from "./SideBarItems";
import { TwitterIcon } from "../icons/twitter-icon";
import { YouTubeIcon } from "../icons/youtube";
import { Button } from "./Button";

interface SideBarProps {
    setSelectedType: (type: string | null) => void; // Function to update selected filter
  }
  
  export function SideBar({ setSelectedType }: SideBarProps) {
    const navigate = useNavigate();
  
    const logOut = () => {
      localStorage.removeItem("token");
      navigate("/signin");
      alert("You have logged out successfully. Please Sign In to continue.");
    };
  
    return (
      <div className="bg-white shadow-2xl h-screen border-r-2 w-[200px] fixed">
        <div className="flex pt-2 gap-4 pl-4">
          <div className="text-purple-700">
            <BrainIcon />
          </div>
          <h1 className="text-lg">Brainly</h1>
        </div>
  
        {/* Buttons to filter YouTube & Twitter content */}
        <button onClick={() => setSelectedType("Twitter")}>
          <SideBarItems text="Twitter" icon={<TwitterIcon />} />
        </button>
        <button onClick={() => setSelectedType("YouTube")}>
          <SideBarItems text="YouTube" icon={<YouTubeIcon />} />
        </button>
  
        {/* Reset filter to show all contents */}
        <button onClick={() => setSelectedType(null)}>
          <SideBarItems text="All" icon={<BrainIcon />} />
        </button>
  
        <div className="mt-[480px] ml-10 ">
          <Button onClick={logOut} variant={"primary"} size={"md"} text={"LogOut"} fullWidth={false} />
        </div>
      </div>
    );
  }
  