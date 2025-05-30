export interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: 'User' | 'Bot';
  site_admin: boolean;
  contributions: number;
}

export interface RepositoryInfo {
  owner: string;
  repo: string;
}

export interface ProcessOptions {
  maxContributors?: number;
  excludeBots?: boolean;
  excludeOrgs?: boolean;
}
