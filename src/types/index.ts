export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

export interface Match {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  strTimestamp: string;
  dateEvent: string;
  strTime: string;
  idHomeTeam: string;
  idAwayTeam: string;
  strLeague: string;
  strThumb: string | null;
  strStatus: string;
}

export interface MatchesResponse {
  events: Match[];
}

export interface League {
  id: string;
  name: string;
  sport: string;
}