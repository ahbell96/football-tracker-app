import React from "react";
import { championshipTeams, premierLeagueTeams } from "../data/teams"; // default base teams
import Container from "../components/Container";

const Teams: React.FC = () => {
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold mb-6">Football Teams</h1>
        {/* Premier League Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Premier League Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {premierLeagueTeams.map((team) => (
              <div key={team} className="card shadow-bg bg-white text-black">
                <div className="card-body">
                  <h3 className="card-title text-lg font-bold">{team}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Championship Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Championship Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {championshipTeams.map((team) => (
              <div key={team} className="card shadow-lg bg-white text-black">
                <div className="card-body">
                  <h3 className="card-title text-lg font-bold">{team}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Teams;
