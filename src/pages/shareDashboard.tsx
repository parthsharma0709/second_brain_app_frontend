import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

import { DashBoard } from "./dashboard";

export function SharedDashboard() {
  const { hash } = useParams(); // Get hash from URL
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchSharedContent() {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/shared/${hash}`);
        setContents(response.data.content);
      } catch (error) {
        console.error("Error fetching shared content:", error);
      }
    }

    fetchSharedContent();
  }, [hash]);

  return (
    <div>
      <DashBoard/>
    </div>
  );
}
