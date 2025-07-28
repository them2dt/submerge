export interface Subscription {
  id: string;
  name: string;
  logo: string;
  category: 'streaming' | 'music' | 'productivity';
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
    logo: '🎬',
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
    logo: '🏰',
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
    logo: '📦',
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

  // Music Services
  {
    id: 'spotify',
    name: 'Spotify Premium',
    logo: '🎵',
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
    logo: '🍎',
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
    logo: '🎼',
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

  // Productivity Services
  {
    id: 'notion',
    name: 'Notion Pro',
    logo: '📝',
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
    logo: '🤖',
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
    logo: '🎨',
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
];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'streaming':
      return '#8B5CF6'; // Muted purple
    case 'music':
      return '#06B6D4'; // Muted cyan
    case 'productivity':
      return '#3B82F6'; // Professional blue
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
    default:
      return 'Other';
  }
}; 