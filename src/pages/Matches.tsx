import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchCard from "../components/MatchCard";
import Container from "../components/Container";

const Matches = () => {
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
  }, []);

  return (
    <Container>
      {matches && matches.map((match: any) => <MatchCard match={match} />)}
    </Container>
  );
};

export default Matches;
