import { useEffect, useState } from 'react';

const FALLBACK = [
  {
    name: 'staffdesk',
    html_url: 'https://github.com/Gauravkadam-web/staffdesk',
    description: 'Employee management — Next.js + Spring Boot',
    stargazers_count: 0,
  },
  {
    name: 'hireflow',
    html_url: 'https://github.com/Gauravkadam-web/hireflow',
    description: 'Job portal — Java Servlets + PostgreSQL',
    stargazers_count: 0,
  },
  {
    name: 'portfolio',
    html_url: 'https://github.com/Gauravkadam-web/portfolio',
    description: 'This site — HTML, CSS, JavaScript',
    stargazers_count: 0,
  },
];

// Mirrors the original fetch-on-load call to the GitHub API; falls back to
// the static repo list baked into the markup if the request fails.
export default function useGithubRepos() {
  const [repos, setRepos] = useState(FALLBACK);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/users/Gauravkadam-web/repos?sort=updated&per_page=5')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data || !data.length) return;
        setRepos(data.slice(0, 4));
        setIsLive(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return repos.slice(0, isLive ? 4 : 3);
}
