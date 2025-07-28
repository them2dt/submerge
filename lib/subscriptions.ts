export interface Subscription {
  id: string;
  name: string;
  logo: string;
  category: 'streaming' | 'music' | 'productivity' | 'gaming' | 'news' | 'fitness' | 'cloud';
  pricing: {
    [country: string]: {
      monthly: number;
      yearly?: number;
      currency: string;
    };
  };
  features?: string[];
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', symbol: '$' },
  { code: 'DE', name: 'Germany', currency: 'EUR', symbol: '€' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£' },
  { code: 'JP', name: 'Japan', currency: 'JPY', symbol: '¥' },
  { code: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$' },
];

export const subscriptions: Subscription[] = [
  // Streaming Services
  {
    id: 'netflix',
    name: 'Netflix',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 15.49, yearly: 185.88, currency: 'USD' },
      DE: { monthly: 12.99, yearly: 155.88, currency: 'EUR' },
      GB: { monthly: 10.99, yearly: 131.88, currency: 'GBP' },
      JP: { monthly: 1490, yearly: 17880, currency: 'JPY' },
      AU: { monthly: 16.99, yearly: 203.88, currency: 'AUD' },
    },
    features: ['4K streaming', 'Multiple profiles', 'Download offline'],
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 7.99, yearly: 79.99, currency: 'USD' },
      DE: { monthly: 8.99, yearly: 89.99, currency: 'EUR' },
      GB: { monthly: 7.99, yearly: 79.90, currency: 'GBP' },
      JP: { monthly: 990, yearly: 9900, currency: 'JPY' },
      AU: { monthly: 11.99, yearly: 119.99, currency: 'AUD' },
    },
    features: ['Marvel content', 'Star Wars', 'Pixar movies'],
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 8.99, yearly: 107.88, currency: 'USD' },
      DE: { monthly: 8.99, yearly: 107.88, currency: 'EUR' },
      GB: { monthly: 8.99, yearly: 107.88, currency: 'GBP' },
      JP: { monthly: 500, yearly: 6000, currency: 'JPY' },
      AU: { monthly: 9.99, yearly: 119.88, currency: 'AUD' },
    },
    features: ['Amazon shipping', 'Original content', 'Twitch Prime'],
  },
  {
    id: 'hbo-max',
    name: 'Max (HBO)',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 15.99, yearly: 149.99, currency: 'USD' },
      DE: { monthly: 8.99, yearly: 89.99, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 99.99, currency: 'GBP' },
      JP: { monthly: 1200, yearly: 12000, currency: 'JPY' },
      AU: { monthly: 15.99, yearly: 159.99, currency: 'AUD' },
    },
    features: ['HBO originals', '4K content', 'Same-day releases'],
  },
  {
    id: 'hulu',
    name: 'Hulu',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 7.99, yearly: 79.99, currency: 'USD' },
      DE: { monthly: 7.99, yearly: 79.99, currency: 'EUR' },
      GB: { monthly: 7.99, yearly: 79.99, currency: 'GBP' },
      JP: { monthly: 1026, yearly: 10260, currency: 'JPY' },
      AU: { monthly: 10.99, yearly: 109.99, currency: 'AUD' },
    },
    features: ['Next-day TV', 'Originals', 'Live TV add-on'],
  },
  {
    id: 'apple-tv-plus',
    name: 'Apple TV+',
    logo: '',
    category: 'streaming',
    pricing: {
      US: { monthly: 6.99, yearly: 69.99, currency: 'USD' },
      DE: { monthly: 6.99, yearly: 69.99, currency: 'EUR' },
      GB: { monthly: 6.99, yearly: 69.99, currency: 'GBP' },
      JP: { monthly: 900, yearly: 9000, currency: 'JPY' },
      AU: { monthly: 9.99, yearly: 99.99, currency: 'AUD' },
    },
    features: ['Apple originals', '4K HDR', 'Ad-free'],
  },

  // Music Services
  {
    id: 'spotify',
    name: 'Spotify Premium',
    logo: '',
    category: 'music',
    pricing: {
      US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
      DE: { monthly: 9.99, yearly: 119.88, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 119.88, currency: 'GBP' },
      JP: { monthly: 980, yearly: 11760, currency: 'JPY' },
      AU: { monthly: 11.95, yearly: 143.40, currency: 'AUD' },
    },
    features: ['Ad-free music', 'Offline downloads', 'High quality audio'],
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    logo: '',
    category: 'music',
    pricing: {
      US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
      DE: { monthly: 10.99, yearly: 131.88, currency: 'EUR' },
      GB: { monthly: 10.99, yearly: 131.88, currency: 'GBP' },
      JP: { monthly: 1080, yearly: 12960, currency: 'JPY' },
      AU: { monthly: 11.99, yearly: 143.88, currency: 'AUD' },
    },
    features: ['Lossless audio', 'Spatial audio', 'Exclusive releases'],
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music',
    logo: '',
    category: 'music',
    pricing: {
      US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
      DE: { monthly: 9.99, yearly: 119.88, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 119.88, currency: 'GBP' },
      JP: { monthly: 1280, yearly: 15360, currency: 'JPY' },
      AU: { monthly: 11.99, yearly: 143.88, currency: 'AUD' },
    },
    features: ['Ad-free videos', 'Background play', 'Music downloads'],
  },
  {
    id: 'tidal',
    name: 'Tidal',
    logo: '',
    category: 'music',
    pricing: {
      US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
      DE: { monthly: 10.99, yearly: 131.88, currency: 'EUR' },
      GB: { monthly: 10.99, yearly: 131.88, currency: 'GBP' },
      JP: { monthly: 1380, yearly: 16560, currency: 'JPY' },
      AU: { monthly: 13.99, yearly: 167.88, currency: 'AUD' },
    },
    features: ['Hi-Fi audio', 'Master quality', 'Exclusive content'],
  },
  {
    id: 'amazon-music',
    name: 'Amazon Music',
    logo: '',
    category: 'music',
    pricing: {
      US: { monthly: 8.99, yearly: 89.99, currency: 'USD' },
      DE: { monthly: 8.99, yearly: 89.99, currency: 'EUR' },
      GB: { monthly: 8.99, yearly: 89.99, currency: 'GBP' },
      JP: { monthly: 980, yearly: 9800, currency: 'JPY' },
      AU: { monthly: 11.99, yearly: 119.99, currency: 'AUD' },
    },
    features: ['70M+ songs', 'Prime discount', 'Alexa integration'],
  },

  // Productivity Services
  {
    id: 'notion',
    name: 'Notion Pro',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 8.00, yearly: 96.00, currency: 'USD' },
      DE: { monthly: 8.00, yearly: 96.00, currency: 'EUR' },
      GB: { monthly: 8.00, yearly: 96.00, currency: 'GBP' },
      JP: { monthly: 1200, yearly: 14400, currency: 'JPY' },
      AU: { monthly: 12.00, yearly: 144.00, currency: 'AUD' },
    },
    features: ['Unlimited pages', 'Version history', 'Advanced permissions'],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 10.00, yearly: 100.00, currency: 'USD' },
      DE: { monthly: 10.00, yearly: 100.00, currency: 'EUR' },
      GB: { monthly: 10.00, yearly: 100.00, currency: 'GBP' },
      JP: { monthly: 1500, yearly: 15000, currency: 'JPY' },
      AU: { monthly: 15.00, yearly: 150.00, currency: 'AUD' },
    },
    features: ['AI code completion', 'Multi-language support', 'IDE integration'],
  },
  {
    id: 'figma-pro',
    name: 'Figma Professional',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 12.00, yearly: 144.00, currency: 'USD' },
      DE: { monthly: 12.00, yearly: 144.00, currency: 'EUR' },
      GB: { monthly: 12.00, yearly: 144.00, currency: 'GBP' },
      JP: { monthly: 1800, yearly: 21600, currency: 'JPY' },
      AU: { monthly: 18.00, yearly: 216.00, currency: 'AUD' },
    },
    features: ['Unlimited projects', 'Version history', 'Advanced prototyping'],
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 6.99, yearly: 69.99, currency: 'USD' },
      DE: { monthly: 7.00, yearly: 69.99, currency: 'EUR' },
      GB: { monthly: 5.99, yearly: 59.99, currency: 'GBP' },
      JP: { monthly: 900, yearly: 10800, currency: 'JPY' },
      AU: { monthly: 11.00, yearly: 109.00, currency: 'AUD' },
    },
    features: ['Office apps', '1TB OneDrive', 'Premium features'],
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 6.00, yearly: 72.00, currency: 'USD' },
      DE: { monthly: 5.75, yearly: 69.00, currency: 'EUR' },
      GB: { monthly: 4.60, yearly: 55.20, currency: 'GBP' },
      JP: { monthly: 816, yearly: 9792, currency: 'JPY' },
      AU: { monthly: 9.00, yearly: 108.00, currency: 'AUD' },
    },
    features: ['Gmail business', 'Drive storage', 'Meet premium'],
  },
  {
    id: 'slack-pro',
    name: 'Slack Pro',
    logo: '',
    category: 'productivity',
    pricing: {
      US: { monthly: 7.25, yearly: 87.00, currency: 'USD' },
      DE: { monthly: 6.75, yearly: 81.00, currency: 'EUR' },
      GB: { monthly: 5.25, yearly: 63.00, currency: 'GBP' },
      JP: { monthly: 850, yearly: 10200, currency: 'JPY' },
      AU: { monthly: 10.50, yearly: 126.00, currency: 'AUD' },
    },
    features: ['Unlimited history', 'Apps & workflows', 'Guest access'],
  },

  // Gaming Services
  {
    id: 'xbox-game-pass',
    name: 'Xbox Game Pass',
    logo: '',
    category: 'gaming',
    pricing: {
      US: { monthly: 16.99, yearly: 199.99, currency: 'USD' },
      DE: { monthly: 14.99, yearly: 179.99, currency: 'EUR' },
      GB: { monthly: 12.99, yearly: 155.99, currency: 'GBP' },
      JP: { monthly: 1100, yearly: 13200, currency: 'JPY' },
      AU: { monthly: 17.95, yearly: 215.40, currency: 'AUD' },
    },
    features: ['100+ games', 'Day-one releases', 'Cloud gaming'],
  },
  {
    id: 'playstation-plus',
    name: 'PlayStation Plus',
    logo: '',
    category: 'gaming',
    pricing: {
      US: { monthly: 17.99, yearly: 159.99, currency: 'USD' },
      DE: { monthly: 16.99, yearly: 149.99, currency: 'EUR' },
      GB: { monthly: 13.49, yearly: 119.99, currency: 'GBP' },
      JP: { monthly: 1550, yearly: 10250, currency: 'JPY' },
      AU: { monthly: 21.95, yearly: 181.95, currency: 'AUD' },
    },
    features: ['Monthly games', 'Online multiplayer', 'Exclusive discounts'],
  },
  {
    id: 'nintendo-switch-online',
    name: 'Nintendo Online',
    logo: '',
    category: 'gaming',
    pricing: {
      US: { monthly: 3.99, yearly: 19.99, currency: 'USD' },
      DE: { monthly: 3.99, yearly: 19.99, currency: 'EUR' },
      GB: { monthly: 3.49, yearly: 17.99, currency: 'GBP' },
      JP: { monthly: 306, yearly: 2400, currency: 'JPY' },
      AU: { monthly: 5.95, yearly: 29.95, currency: 'AUD' },
    },
    features: ['Online play', 'NES/SNES games', 'Cloud saves'],
  },

  // News & Education
  {
    id: 'nyt-digital',
    name: 'New York Times',
    logo: '',
    category: 'news',
    pricing: {
      US: { monthly: 17.00, yearly: 170.00, currency: 'USD' },
      DE: { monthly: 15.00, yearly: 150.00, currency: 'EUR' },
      GB: { monthly: 12.00, yearly: 120.00, currency: 'GBP' },
      JP: { monthly: 1800, yearly: 18000, currency: 'JPY' },
      AU: { monthly: 22.00, yearly: 220.00, currency: 'AUD' },
    },
    features: ['All articles', 'Audio stories', 'Newsletter access'],
  },
  {
    id: 'masterclass',
    name: 'MasterClass',
    logo: '',
    category: 'news',
    pricing: {
      US: { monthly: 15.00, yearly: 180.00, currency: 'USD' },
      DE: { monthly: 15.00, yearly: 180.00, currency: 'EUR' },
      GB: { monthly: 12.00, yearly: 144.00, currency: 'GBP' },
      JP: { monthly: 1800, yearly: 21600, currency: 'JPY' },
      AU: { monthly: 20.00, yearly: 240.00, currency: 'AUD' },
    },
    features: ['Expert classes', 'Downloadable lessons', 'Community access'],
  },

  // Fitness
  {
    id: 'peloton-digital',
    name: 'Peloton Digital',
    logo: '',
    category: 'fitness',
    pricing: {
      US: { monthly: 12.99, yearly: 155.88, currency: 'USD' },
      DE: { monthly: 12.99, yearly: 155.88, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 119.88, currency: 'GBP' },
      JP: { monthly: 1480, yearly: 17760, currency: 'JPY' },
      AU: { monthly: 15.99, yearly: 191.88, currency: 'AUD' },
    },
    features: ['Live & on-demand', 'Multiple workouts', 'Progress tracking'],
  },
  {
    id: 'nike-training-club',
    name: 'Nike Training Club',
    logo: '',
    category: 'fitness',
    pricing: {
      US: { monthly: 14.99, yearly: 119.99, currency: 'USD' },
      DE: { monthly: 12.99, yearly: 104.99, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 79.99, currency: 'GBP' },
      JP: { monthly: 1200, yearly: 9600, currency: 'JPY' },
      AU: { monthly: 17.99, yearly: 143.99, currency: 'AUD' },
    },
    features: ['Expert trainers', 'Custom plans', 'Nike gear access'],
  },

  // Cloud Storage
  {
    id: 'icloud-plus',
    name: 'iCloud+',
    logo: '',
    category: 'cloud',
    pricing: {
      US: { monthly: 2.99, yearly: 35.88, currency: 'USD' },
      DE: { monthly: 2.99, yearly: 35.88, currency: 'EUR' },
      GB: { monthly: 2.49, yearly: 29.88, currency: 'GBP' },
      JP: { monthly: 400, yearly: 4800, currency: 'JPY' },
      AU: { monthly: 4.49, yearly: 53.88, currency: 'AUD' },
    },
    features: ['200GB storage', 'Privacy features', 'Family sharing'],
  },
  {
    id: 'google-one',
    name: 'Google One',
    logo: '',
    category: 'cloud',
    pricing: {
      US: { monthly: 2.99, yearly: 29.99, currency: 'USD' },
      DE: { monthly: 2.99, yearly: 29.99, currency: 'EUR' },
      GB: { monthly: 2.49, yearly: 24.99, currency: 'GBP' },
      JP: { monthly: 380, yearly: 3800, currency: 'JPY' },
      AU: { monthly: 4.49, yearly: 44.99, currency: 'AUD' },
    },
    features: ['100GB storage', 'Premium support', 'Member benefits'],
  },
  {
    id: 'dropbox-plus',
    name: 'Dropbox Plus',
    logo: '',
    category: 'cloud',
    pricing: {
      US: { monthly: 11.99, yearly: 119.88, currency: 'USD' },
      DE: { monthly: 11.99, yearly: 119.88, currency: 'EUR' },
      GB: { monthly: 9.99, yearly: 99.88, currency: 'GBP' },
      JP: { monthly: 1500, yearly: 15000, currency: 'JPY' },
      AU: { monthly: 15.99, yearly: 159.88, currency: 'AUD' },
    },
    features: ['2TB storage', 'Smart sync', 'Advanced sharing'],
  },
];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'streaming':
      return '#8B5CF6'; // Muted purple
    case 'music':
      return '#06B6D4'; // Muted cyan
    case 'productivity':
      return '#3B82F6'; // Professional blue
    case 'gaming':
      return '#10B981'; // Green
    case 'news':
      return '#F59E0B'; // Amber
    case 'fitness':
      return '#EF4444'; // Red
    case 'cloud':
      return '#8B5CF6'; // Purple
    default:
      return '#6B7280'; // Gray fallback
  }
};

export const getCategoryName = (category: string): string => {
  switch (category) {
    case 'streaming':
      return 'Streaming';
    case 'music':
      return 'Music';
    case 'productivity':
      return 'Productivity';
    case 'gaming':
      return 'Gaming';
    case 'news':
      return 'News & Education';
    case 'fitness':
      return 'Fitness';
    case 'cloud':
      return 'Cloud Storage';
    default:
      return 'Other';
  }
}; 