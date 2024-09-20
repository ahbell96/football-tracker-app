import React from "react";
import { useParams } from "react-router-dom";

const Match: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Access the dynamic route parameter (match id)

  return (
    <div>
      <h1 className="text-4xl font-bold">Match Details</h1>
      <p>Details for match ID: {id}</p>
    </div>
  );
};

export default Match;
