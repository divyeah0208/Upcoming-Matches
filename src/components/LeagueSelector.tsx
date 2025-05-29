import React from 'react';
import { League } from '../types';

interface LeagueSelectorProps {
  leagues: League[];
  selectedLeagueId: string;
  onSelectLeague: (leagueId: string) => void;
}

const LeagueSelector: React.FC<LeagueSelectorProps> = ({ 
  leagues, 
  selectedLeagueId, 
  onSelectLeague 
}) => {
  return (
    <div className="mb-6">
      <label htmlFor="league-selector\" className="sr-only">
        Select League
      </label>
      <div className="flex flex-wrap gap-2">
        {leagues.map(league => (
          <button
            key={league.id}
            onClick={() => onSelectLeague(league.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedLeagueId === league.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
            }`}
          >
            {league.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeagueSelector;