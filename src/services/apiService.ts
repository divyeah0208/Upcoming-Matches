import { MatchesResponse } from '../types';

export const leagues = [
  { id: '4328', name: 'English Premier League', sport: 'Soccer' },
  { id: '4387', name: 'NBA', sport: 'Basketball' },
  { id: '4429', name: 'NFL', sport: 'American Football' },
  { id: '4346', name: 'MLB', sport: 'Baseball' },
  { id: '4380', name: 'NHL', sport: 'Ice Hockey' },
];

// Custom matches data
const matchesData: { [key: string]: MatchesResponse } = {
  '4328': {
    events: [
      {
        idEvent: '1',
        strEvent: 'Manchester United vs Liverpool',
        strHomeTeam: 'Manchester United',
        strAwayTeam: 'Liverpool',
        strTimestamp: '2024-03-20 15:00:00',
        dateEvent: '2024-03-20',
        strTime: '15:00:00',
        idHomeTeam: 'man_utd',
        idAwayTeam: 'liverpool',
        strLeague: 'English Premier League',
        strThumb: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
        strStatus: 'Scheduled'
      },
      {
        idEvent: '2',
        strEvent: 'Arsenal vs Chelsea',
        strHomeTeam: 'Arsenal',
        strAwayTeam: 'Chelsea',
        dateEvent: '2024-03-21',
        strTime: '20:00:00',
        strTimestamp: '2024-03-21 20:00:00',
        idHomeTeam: 'arsenal',
        idAwayTeam: 'chelsea',
        strLeague: 'English Premier League',
        strThumb: 'https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg',
        strStatus: 'Scheduled'
      }
    ]
  },
  '4387': {
    events: [
      {
        idEvent: '3',
        strEvent: 'Lakers vs Warriors',
        strHomeTeam: 'Los Angeles Lakers',
        strAwayTeam: 'Golden State Warriors',
        dateEvent: '2024-03-20',
        strTime: '19:30:00',
        strTimestamp: '2024-03-20 19:30:00',
        idHomeTeam: 'lakers',
        idAwayTeam: 'warriors',
        strLeague: 'NBA',
        strThumb: 'https://images.pexels.com/photos/2304359/pexels-photo-2304359.jpeg',
        strStatus: 'Scheduled'
      },
      {
        idEvent: '4',
        strEvent: 'Celtics vs Nets',
        strHomeTeam: 'Boston Celtics',
        strAwayTeam: 'Brooklyn Nets',
        dateEvent: '2024-03-21',
        strTime: '18:00:00',
        strTimestamp: '2024-03-21 18:00:00',
        idHomeTeam: 'celtics',
        idAwayTeam: 'nets',
        strLeague: 'NBA',
        strThumb: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
        strStatus: 'Scheduled'
      }
    ]
  },
  '4429': {
    events: [
      {
        idEvent: '5',
        strEvent: 'Chiefs vs Ravens',
        strHomeTeam: 'Kansas City Chiefs',
        strAwayTeam: 'Baltimore Ravens',
        dateEvent: '2024-03-22',
        strTime: '16:25:00',
        strTimestamp: '2024-03-22 16:25:00',
        idHomeTeam: 'chiefs',
        idAwayTeam: 'ravens',
        strLeague: 'NFL',
        strThumb: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg',
        strStatus: 'Scheduled'
      }
    ]
  },
  '4346': {
    events: [
      {
        idEvent: '6',
        strEvent: 'Yankees vs Red Sox',
        strHomeTeam: 'New York Yankees',
        strAwayTeam: 'Boston Red Sox',
        dateEvent: '2024-03-20',
        strTime: '13:05:00',
        strTimestamp: '2024-03-20 13:05:00',
        idHomeTeam: 'yankees',
        idAwayTeam: 'redsox',
        strLeague: 'MLB',
        strThumb: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg',
        strStatus: 'Scheduled'
      }
    ]
  },
  '4380': {
    events: [
      {
        idEvent: '7',
        strEvent: 'Maple Leafs vs Canadiens',
        strHomeTeam: 'Toronto Maple Leafs',
        strAwayTeam: 'Montreal Canadiens',
        dateEvent: '2024-03-21',
        strTime: '19:00:00',
        strTimestamp: '2024-03-21 19:00:00',
        idHomeTeam: 'mapleleafs',
        idAwayTeam: 'canadiens',
        strLeague: 'NHL',
        strThumb: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg',
        strStatus: 'Scheduled'
      }
    ]
  }
};

export const fetchUpcomingMatches = async (leagueId: string): Promise<MatchesResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return matches for the selected league
  return matchesData[leagueId] || { events: [] };
};