
/////////////////////////////////////



import { ShareIcon } from "../icons/share-icon";
import { Button } from "./Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";

interface CardProps {
  contentId: string; // Add contentId to props
  title: string;
  link: string;
  type: "Twitter" | "YouTube";
  refresh: () => void; // Function to refresh content after deletion
}


export function Card({ contentId, title, link, type, refresh }: CardProps) {
  // Function to delete content
  const deleteContent = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: { Authorization: localStorage.getItem("token") },
        data: { contentId }, // Send contentId in the request body
      });
      alert("Content deleted successfully!");
      refresh(); // Refresh the content list
    } catch (error) {
      console.error("Error deleting content:", error);
      alert("Failed to delete content");
    }
  };

  // Convert YouTube link to an embeddable URL
  const getEmbedUrl = (url: string) => {
    let videoId = "";
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/;
    const match = url.match(regex);
    if (match && match[1]) videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="inline-block">
      <div className="bg-white rounded-md shadow-md border w-fit max-w-[500px]">
        {/* Header Section */}
        <div className="flex justify-between p-2">
          <div className="flex items-center">
            <div className="pr-2">
              <ShareIcon />
            </div>
            <div className="text-sm">{title}</div>
          </div>
          <div className="flex items-center pr-3 gap-2 text-gray-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ShareIcon />
            </a>
            {/* Delete Button */}
            <Button
              variant={"primary"}
              size={"sm"}
              text={"Delete"}
              fullWidth={false}
              onClick={deleteContent} // Call delete function when clicked
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-center p-3">
          {type === "YouTube" && (
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={getEmbedUrl(link)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {type === "Twitter" && (
            <div className="w-full max-w-[400px]">
              <blockquote className="twitter-tweet w-full">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
