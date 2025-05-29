import React, { useState, useEffect } from 'react';
import { Match } from './types';
import MatchesList from './components/MatchesList';
import LeagueSelector from './components/LeagueSelector';
import ThemeToggle from './components/ThemeToggle';
import { fetchUpcomingMatches, leagues } from './services/apiService';
import { useTheme } from './hooks/useTheme';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLeagueId, setSelectedLeagueId] = useState<string>(leagues[0].id);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const loadMatches = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetchUpcomingMatches(selectedLeagueId);
        setMatches(response.events || []);
      } catch (err) {
        setError('Failed to load matches. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMatches();
  }, [selectedLeagueId]);

  // Handle league selection
  const handleLeagueSelect = (leagueId: string) => {
    setSelectedLeagueId(leagueId);
  };

  // Find the currently selected league name
  const selectedLeague = leagues.find(league => league.id === selectedLeagueId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <header className="bg-white dark:bg-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SportsMatch</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your source for upcoming sports matches</p>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Upcoming {selectedLeague?.name} Matches
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browse the latest upcoming matches across top leagues.
          </p>
        </div>
        
        <LeagueSelector 
          leagues={leagues} 
          selectedLeagueId={selectedLeagueId}
          onSelectLeague={handleLeagueSelect}
        />
        
        <MatchesList 
          matches={matches} 
          isLoading={isLoading} 
          error={error} 
        />
      </main>
      
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Data provided by TheSportsDB API | Created with ❤️ for sports fans
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;