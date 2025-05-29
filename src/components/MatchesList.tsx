import React, { useState, useEffect } from 'react';
import { Match } from '../types';
import MatchCard from './MatchCard';
import { isMatchToday, isMatchTomorrow } from '../utils/dateUtils';

interface MatchesListProps {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
}

const MatchesList: React.FC<MatchesListProps> = ({ matches, isLoading, error }) => {
  const [groupedMatches, setGroupedMatches] = useState<{
    today: Match[];
    tomorrow: Match[];
    upcoming: Match[];
  }>({
    today: [],
    tomorrow: [],
    upcoming: [],
  });

  useEffect(() => {
    // Group matches by date
    const today: Match[] = [];
    const tomorrow: Match[] = [];
    const upcoming: Match[] = [];

    matches.forEach(match => {
      if (isMatchToday(match.dateEvent)) {
        today.push(match);
      } else if (isMatchTomorrow(match.dateEvent)) {
        tomorrow.push(match);
      } else {
        upcoming.push(match);
      }
    });

    setGroupedMatches({ today, tomorrow, upcoming });
  }, [matches]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading matches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300">
        <p className="font-medium">Error loading matches</p>
        <p className="text-sm mt-1">{error}</p>
        <p className="text-sm mt-3">Please try again later or select a different league.</p>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-medium">No upcoming matches</p>
        <p className="text-sm mt-1">There are no upcoming matches scheduled for this league at the moment.</p>
        <p className="text-sm mt-3">Please check back later or select a different league.</p>
      </div>
    );
  }

  const renderMatchGroup = (title: string, matchesGroup: Match[]) => {
    if (matchesGroup.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchesGroup.map((match, index) => (
            <div key={match.idEvent} style={{ animationDelay: `${index * 50}ms` }}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderMatchGroup('Today\'s Matches', groupedMatches.today)}
      {renderMatchGroup('Tomorrow\'s Matches', groupedMatches.tomorrow)}
      {renderMatchGroup('Upcoming Matches', groupedMatches.upcoming)}
    </div>
  );
};

export default MatchesList;