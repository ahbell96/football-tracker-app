const MatchCard = ({ match }: any) => {
  const matchDate = new Date(match.utcDate).toLocaleString();
  return (
    <div className="card w-full bg-base-100 shadow-lg my-4">
      <div className="card-body">
        {/* Competition Info */}
        <div className="flex items-center mb-4">
          <img
            src={match.competition?.emblem}
            alt={match.competition?.name}
            className="w-10 h-10"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">{match.competition?.name}</p>
            <p className="text-xs text-gray-500">{match.area?.name}</p>
          </div>
        </div>

        {/* Match Info */}
        <div className="flex justify-between items-center">
          {/* Home Team */}
          <div className="text-center">
            <img
              src={match.homeTeam?.crest}
              alt={match.homeTeam?.name}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-md font-semibold mt-2">
              {match.homeTeam?.shortName}
            </p>
          </div>

          {/* Match Score */}
          <div className="text-center">
            <p className="text-2xl font-bold">
              {match.score.fullTime.home} - {match.score.fullTime.away}
            </p>
            <p className="text-sm text-gray-500">
              {match.status} • Matchday {match.matchday}
            </p>
          </div>

          {/* Away Team */}
          <div className="text-center">
            <img
              src={match.awayTeam?.crest}
              alt={match.awayTeam?.name}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-md font-semibold mt-2">
              {match.awayTeam?.shortName}
            </p>
          </div>
        </div>

        {/* Match Details */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Date:</strong> {matchDate}
          </p>
          <p>
            <strong>Referee:</strong> {match.referees[0]?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
