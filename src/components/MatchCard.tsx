import React from 'react';
import { Match } from '../types';
import { formatDate, getRelativeDate } from '../utils/dateUtils';
import { Calendar, Clock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const formattedDate = formatDate(match.dateEvent, match.strTime);
  const relativeDate = getRelativeDate(match.dateEvent);

  // Function to get a placeholder image if team badge is not available
  const getTeamImage = (teamId: string) => {
    return `https://www.thesportsdb.com/images/media/team/badge/${teamId}.png`;
  };

  // Animation class for staggered appearance
  const animationClass = "animate-fade-in";

  return (
    <div 
      className={`${animationClass} bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-slate-700`}
    >
      {/* Match header with league name */}
      <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 font-medium text-sm">
        {match.strLeague}
      </div>
      
      {/* Match thumbnail if available */}
      {match.strThumb && (
        <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img 
            src={match.strThumb} 
            alt={match.strEvent} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      
      {/* Match details */}
      <div className="p-4">
        {/* Date and time section */}
        <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300 text-sm">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{relativeDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{formattedDate.split(' at ')[1]}</span>
          </div>
        </div>
        
        {/* Teams section */}
        <div className="flex flex-col space-y-4">
          {/* Home team */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 flex-shrink-0">
              <img 
                src={getTeamImage(match.idHomeTeam)}
                alt={match.strHomeTeam}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://www.thesportsdb.com/images/media/team/badge/generic.png';
                }}
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-white">{match.strHomeTeam}</span>
          </div>
          
          {/* Away team */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 flex-shrink-0">
              <img 
                src={getTeamImage(match.idAwayTeam)}
                alt={match.strAwayTeam}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://www.thesportsdb.com/images/media/team/badge/generic.png';
                }}
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-white">{match.strAwayTeam}</span>
          </div>
        </div>
      </div>
      
      {/* Match status badge */}
      <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs">
          Upcoming
        </span>
      </div>
    </div>
  );
};

export default MatchCard;