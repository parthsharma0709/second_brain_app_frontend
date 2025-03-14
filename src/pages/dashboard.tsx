import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { PlusIcon } from "../icons/plus-icon";
import { ShareIcon } from "../icons/share-icon";
import { SideBar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [selectedType, setSelectedType] = useState<string | null>(null); // Default: Show all content

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  // Filter contents if a type is selected, otherwise show all
  const filteredContents = selectedType
    ? contents.filter((content) => content.type === selectedType)
    : contents;

  // Function to share the brain
  const shareBrain = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
      alert(`Share this link: ${shareUrl}`);
    } catch (error) {
      console.error("Error sharing brain:", error);
      alert("Failed to share brain");
    }
  };

  return (
    <div>
      {/* Pass setSelectedType to SideBar */}
      <SideBar setSelectedType={setSelectedType} />

      <div className="p-4 ml-[200px] min-h-screen bg-gray-100 border-2">
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen((c) => !c)} />

        <div className="flex justify-end pr-10">
          <div className="flex gap-10 mt-2 mb-4">
            <Button
              variant="primary"
              text="Add Content"
              size={"md"}
              startIcon={<PlusIcon size={"md"} />}
              onClick={() => setModelOpen(true)}
              fullWidth={false}
            />

            {/* Share Brain Button Restored */}
            <Button
              variant="secondary"
              text="Share Brain"
              size={"md"}
              startIcon={<ShareIcon size={"md"} />}
              onClick={shareBrain}
              fullWidth={false}
            />
          </div>
        </div>

        {/* Display filtered or all contents */}
        <div className="flex flex-wrap gap-5 overflow-x-hidden">
          {filteredContents.map((content) => (
            <Card
              key={content._id}
              contentId={content._id}
              title={content.title}
              link={content.link}
              type={content.type}
              refresh={refresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
