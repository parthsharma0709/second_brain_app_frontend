import { ReactElement } from "react";



type variant="primary" | "secondary";
interface ButtonProps{
    variant:variant;
    size:"sm"|"md"|"lg" ;
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick?: ()=>void;
    fullWidth:boolean;
    loading?:boolean

}

const variantStyle:Record<variant,string> ={ 

    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}
const defaultStyle = "rounded-md flex px-4 py-2 font-light items-center {";

const sizeStyles:Record<string,string>={
     "sm":"py-1 px-2 text-sm rounded-sm",
     "md":"py-2 px-4 text-md rounded-md",
     "lg":"py-4 px-6 text-xl rounded-xl"
}


export const Button =(props:ButtonProps)=>{
   return <button onClick ={props.onClick} className={ `${variantStyle[props.variant]} ${defaultStyle} ${sizeStyles[props.size]} ${props.fullWidth? " w-full flex justify-center items-center":" "} ${props.loading?  "opacity-40" : ""}`} disabled={props.loading} >{props.startIcon ? <div className="pr-2">{props.startIcon}</div>: null } {props.text} {props.endIcon} </button>
}

// props={ variant, size, text, startIcon, endIcon,onclick}

