export interface Platform {
  name: string;
  color: string;
  icon: string;
}

export const platforms: Platform[] = [
  { name: 'GitHub', color: '#181717', icon: 'github_grey.svg' },
  { name: 'Frontend Mentor', color: '#3F54A3', icon: 'fm_grey.svg' },
  { name: 'Twitter', color: '#1DA1F2', icon: 'twitter.svg' },
  { name: 'LinkedIn', color: '#0077B5', icon: 'in_grey.svg' },
  { name: 'YouTube', color: '#FF0000', icon: 'yt_grey.svg' },
  { name: 'Facebook', color: '#1877F2', icon: 'fb_grey.svg' },
  { name: 'Twitch', color: '#9146FF', icon: 'twitch_grey.svg' },
  { name: 'Dev.to', color: '#0A0A0A', icon: 'dev_grey.svg' },
  { name: 'Codewars', color: '#AD2C27', icon: 'codewar_grey.svg' },
  { name: 'freeCodeCamp', color: '#006400', icon: 'fcc_grey.svg' },
  { name: 'GitLab', color: '#FC6D26', icon: 'gl_grey.svg' },
  { name: 'Hashnode', color: '#2962FF', icon: 'hn_grey.svg' },
  { name: 'Stack Overflow', color: '#F48024', icon: 'so_grey.svg' },
];
