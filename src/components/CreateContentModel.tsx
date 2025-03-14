
import { useRef, useState } from "react";
import { CrossIcon } from "../icons/cross-icon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  YouTube = "YouTube",
  Twitter = "Twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.YouTube);

  async function addContent() {
    const token = localStorage.getItem("token");
  
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
  
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, link, type },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
             onClose();
      alert("✅ Content added successfully!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error("❌ Error adding content:", error.response?.data || error.message);
  
    }
  }
  
  return (
    <div>
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] h-[400px] rounded-md shadow-2xl">
            <div className="flex justify-end">
              <div onClick={onClose} className="bg-slate-500 mt-2 mr-2 cursor-pointer">
                <CrossIcon size={"lg"} />
              </div>
            </div>
            <div className="pt-4 gap-5">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                  <div className="text-lg">Title: </div>
                  <Input ref={titleRef} placeholder="Title" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-lg">Link :</div>
                  <Input ref={linkRef} placeholder="Link" />
                </div>
                <div className="p-2">Content Type</div>
                <div className="flex pt-2 gap-10">
                  <Button
                    onClick={() => setType(ContentType.YouTube)}
                    text="YouTube"
                    variant={type === ContentType.YouTube ? "primary" : "secondary"}
                    size="md"
                    fullWidth={false}
                  />
                  <Button
                    onClick={() => setType(ContentType.Twitter)}
                    text="Twitter"
                    variant={type === ContentType.Twitter ? "primary" : "secondary"}
                    size="md"
                    fullWidth={false}
                  />
                </div>
                <div className="p-20 w-full pt-8 font-bold">
                  <Button  onClick={addContent} variant="primary" text="Submit" size="md" fullWidth />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { Input };

