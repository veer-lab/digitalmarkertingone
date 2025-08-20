import React from 'react';

const iconProps = {
  className: "h-12 w-12 mb-4 gradient-text",
  strokeWidth: 1.5
};

const socialIconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const BrainCircuitIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.54 19.54" /><path d="M12 2a10 10 0 0 1 3.54 19.54" /><path d="M2 12h2" /><path d="M12 2v2" /><path d="M20 12h2" /><path d="M12 22v-2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l-1.42 1.42" /><path d="M19.78 19.78l-1.42-1.42" /><path d="M5.64 5.64l1.42 1.42" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
  </svg>
);

export const BotIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
  </svg>
);

export const UsersIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const DatabaseZapIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 9 3 9 3 0 0 0 9-3V5" /><path d="M3 12A9 3 0 0 0 12 15a9 3 0 0 0 9-3" /><path d="m14 13 3 4-4 1 1-4-3-4 4-1-1 4Z" />
  </svg>
);

export const TrendingUpIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

// Social Icons
export const TwitterIcon: React.FC = () => (
  <svg {...socialIconProps} viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export const LinkedinIcon: React.FC = () => (
  <svg {...socialIconProps} viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon: React.FC = () => (
  <svg {...socialIconProps} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const SendIcon: React.FC = () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);