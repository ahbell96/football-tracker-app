import React from "react";
import { Link } from "react-router-dom";
import { teams } from "../data/teams"; // default base teams

const Teams: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Football Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id} className="mb-4">
            {/* Link to the dynamic route for each team */}
            <Link
              to={`/teams/${team.id}`}
              className="text-blue-500 hover:underline"
            >
              {team.name} - {team.league}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
