import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";




export function useContent(){
    const [contents,setContents]=useState([]);
    

           const refresh = async ()=>{
       await axios.get(`${BACKEND_URL}/api/v1/content` ,{
            headers:{
                "Authorization" :localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setContents(response.data.content)
        })
     }

    useEffect(()=>{
        refresh()
        // eslint-disable-next-line prefer-const
        let interval= setInterval(()=>{
            refresh()
        },10*1000)

        return ()=>{
            clearInterval(interval)
         }
      
    },[])
  return {contents,refresh}
}