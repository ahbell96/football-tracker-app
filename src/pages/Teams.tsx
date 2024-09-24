import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import MatchCard from "../components/MatchCard";

interface Teams {
  name: string;
  location: string;
  stadium: string;
}

// const match = {
//   area: {
//     name: "England",
//     flag: "https://crests.football-data.org/770.svg",
//   },
//   competition: {
//     name: "Premier League",
//     emblem: "https://crests.football-data.org/PL.png",
//   },
//   homeTeam: {
//     name: "Manchester United FC",
//     shortName: "Man United",
//     crest: "https://crests.football-data.org/66.png",
//   },
//   awayTeam: {
//     name: "Fulham FC",
//     shortName: "Fulham",
//     crest: "https://crests.football-data.org/63.png",
//   },
//   score: {
//     fullTime: {
//       home: 1,
//       away: 0,
//     },
//   },
//   matchday: 1,
//   utcDate: "2024-08-16T19:00:00Z",
//   status: "FINISHED",
//   referees: [
//     {
//       name: "Robert Jones",
//     },
//   ],
// };

const CompetitionCard = ({ competition }: any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="flex items-center p-4">
        <img
          src={competition.emblem}
          alt={`${competition.name} emblem`}
          className="w-16 h-16 rounded-full border-2 border-primary"
        />
        <div className="ml-4">
          <h2 className="card-title text-xl font-semibold">
            {competition.name}
          </h2>
          <p className="text-sm text-gray-500">{competition.type}</p>
          <span className="badge badge-primary mt-2">{competition.id}</span>
        </div>
      </div>
    </div>
  );
};

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [competition, setCompetition] = useState<any>();
  const [matches, setMatches] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/premierLeagueMatches.json");

      const data = await response.json();

      console.log("data.matches : ", data.matches);

      setCompetition(data.competition);
      setMatches(data.matches);
    } catch (err) {
      console.log("err : ", err);
    }
  };

  useEffect(() => {
    fetchData();
    // fetch("/premierLeagueMatches.json")
    //   .then((response) => {
    //     console.log("response : ", response);
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //     console.log("data : ", data);
    //     return data;
    //   })
    //   .then((data) => setTeams(data))
    //   .catch((error) => console.error("Error fetching the teams:", error));
  }, []);

  useEffect(() => {
    console.log("competition : ", competition);
  }, [competition]);

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold mb-6">Football Teams</h1>
        {/* Premier League Section */}
        {competition && <CompetitionCard competition={competition} />}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Premier League Teams</h2>
        </section>
      </div>
    </Container>
  );
};

export default Teams;
