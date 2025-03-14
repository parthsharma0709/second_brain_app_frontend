import { ReactElement } from "react";

interface SideBarProps{
    text:string;
    icon:ReactElement
}

export function SideBarItems(props:SideBarProps){
    return <div className="flex flex-col  pt-3 pl-3 pr-3">
       
        <div className="flex gap-4 cursor-pointer hover:bg-gray-300 p-2 rounded transition-all duration-100">
            {props.icon} {props.text} 
        </div>

    </div>
}