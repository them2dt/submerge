export interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  pricing: {
    [country: string]: {
      monthly: number;
      yearly?: number;
      currency: string;
    };
  };
  features: string[];
}

export interface Subscription {
  id: string;
  name: string;
  logo: string;
  category: 'streaming' | 'music' | 'productivity' | 'gaming' | 'news' | 'fitness' | 'cloud';
  plans: SubscriptionPlan[];
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', symbol: '$' },
  { code: 'DE', name: 'Germany', currency: 'EUR', symbol: '€' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£' },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', symbol: 'CHF' },
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
    plans: [
      {
        id: 'netflix-basic',
        name: 'Basic',
        pricing: {
          US: { monthly: 6.99, yearly: 83.88, currency: 'USD' },
          DE: { monthly: 7.99, yearly: 95.88, currency: 'EUR' },
          GB: { monthly: 4.99, yearly: 59.88, currency: 'GBP' },
          CH: { monthly: 11.90, yearly: 142.80, currency: 'CHF' },
          JP: { monthly: 990, yearly: 11880, currency: 'JPY' },
          AU: { monthly: 10.99, yearly: 131.88, currency: 'AUD' },
        },
        features: ['720p HD', '1 screen', 'Mobile + tablet + computer + TV'],
      },
      {
        id: 'netflix-standard',
        name: 'Standard',
        pricing: {
          US: { monthly: 15.49, yearly: 185.88, currency: 'USD' },
          DE: { monthly: 12.99, yearly: 155.88, currency: 'EUR' },
          GB: { monthly: 10.99, yearly: 131.88, currency: 'GBP' },
          CH: { monthly: 17.90, yearly: 214.80, currency: 'CHF' },
          JP: { monthly: 1490, yearly: 17880, currency: 'JPY' },
          AU: { monthly: 16.99, yearly: 203.88, currency: 'AUD' },
        },
        features: ['1080p Full HD', '2 screens', 'Download on 2 devices'],
      },
      {
        id: 'netflix-premium',
        name: 'Premium',
        pricing: {
          US: { monthly: 22.99, yearly: 275.88, currency: 'USD' },
          DE: { monthly: 17.99, yearly: 215.88, currency: 'EUR' },
          GB: { monthly: 17.99, yearly: 215.88, currency: 'GBP' },
          CH: { monthly: 24.90, yearly: 298.80, currency: 'CHF' },
          JP: { monthly: 1980, yearly: 23760, currency: 'JPY' },
          AU: { monthly: 25.99, yearly: 311.88, currency: 'AUD' },
        },
        features: ['4K Ultra HD', '4 screens', 'Download on 6 devices', 'Spatial audio'],
      },
    ],
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: '',
    category: 'music',
    plans: [
      {
        id: 'spotify-individual',
        name: 'Individual',
        pricing: {
          US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
          DE: { monthly: 9.99, yearly: 119.88, currency: 'EUR' },
          GB: { monthly: 9.99, yearly: 119.88, currency: 'GBP' },
          CH: { monthly: 12.95, yearly: 155.40, currency: 'CHF' },
          JP: { monthly: 980, yearly: 11760, currency: 'JPY' },
          AU: { monthly: 11.95, yearly: 143.40, currency: 'AUD' },
        },
        features: ['Ad-free music', 'Offline downloads', 'High quality audio', '1 account'],
      },
      {
        id: 'spotify-family',
        name: 'Family',
        pricing: {
          US: { monthly: 16.99, yearly: 203.88, currency: 'USD' },
          DE: { monthly: 15.99, yearly: 191.88, currency: 'EUR' },
          GB: { monthly: 15.99, yearly: 191.88, currency: 'GBP' },
          CH: { monthly: 19.95, yearly: 239.40, currency: 'CHF' },
          JP: { monthly: 1580, yearly: 18960, currency: 'JPY' },
          AU: { monthly: 18.95, yearly: 227.40, currency: 'AUD' },
        },
        features: ['Ad-free music', 'Offline downloads', 'High quality audio', '6 accounts', 'Family mix'],
      },
    ],
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    logo: '',
    category: 'music',
    plans: [
      {
        id: 'apple-music-individual',
        name: 'Individual',
        pricing: {
          US: { monthly: 10.99, yearly: 131.88, currency: 'USD' },
          DE: { monthly: 10.99, yearly: 131.88, currency: 'EUR' },
          GB: { monthly: 10.99, yearly: 131.88, currency: 'GBP' },
          CH: { monthly: 12.95, yearly: 129.00, currency: 'CHF' },
          JP: { monthly: 1080, yearly: 12960, currency: 'JPY' },
          AU: { monthly: 11.99, yearly: 143.88, currency: 'AUD' },
        },
        features: ['Lossless audio', 'Spatial audio', 'Exclusive releases', '1 account'],
      },
      {
        id: 'apple-music-family',
        name: 'Family',
        pricing: {
          US: { monthly: 16.99, yearly: 203.88, currency: 'USD' },
          DE: { monthly: 16.99, yearly: 203.88, currency: 'EUR' },
          GB: { monthly: 16.99, yearly: 203.88, currency: 'GBP' },
          CH: { monthly: 19.95, yearly: 239.40, currency: 'CHF' },
          JP: { monthly: 1680, yearly: 20160, currency: 'JPY' },
          AU: { monthly: 17.99, yearly: 215.88, currency: 'AUD' },
        },
        features: ['Lossless audio', 'Spatial audio', 'Exclusive releases', '6 accounts', 'Family sharing'],
      },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    logo: '',
    category: 'productivity',
    plans: [
      {
        id: 'github-copilot-individual',
        name: 'Individual',
        pricing: {
          US: { monthly: 10.00, yearly: 100.00, currency: 'USD' },
          DE: { monthly: 10.00, yearly: 100.00, currency: 'EUR' },
          GB: { monthly: 10.00, yearly: 100.00, currency: 'GBP' },
          CH: { monthly: 10.00, yearly: 100.00, currency: 'CHF' },
          JP: { monthly: 1500, yearly: 15000, currency: 'JPY' },
          AU: { monthly: 15.00, yearly: 150.00, currency: 'AUD' },
        },
        features: ['AI code completion', 'Multi-language support', 'IDE integration', 'Personal use'],
      },
      {
        id: 'github-copilot-business',
        name: 'Business',
        pricing: {
          US: { monthly: 19.00, yearly: 228.00, currency: 'USD' },
          DE: { monthly: 19.00, yearly: 228.00, currency: 'EUR' },
          GB: { monthly: 19.00, yearly: 228.00, currency: 'GBP' },
          CH: { monthly: 19.00, yearly: 228.00, currency: 'CHF' },
          JP: { monthly: 2850, yearly: 34200, currency: 'JPY' },
          AU: { monthly: 28.50, yearly: 342.00, currency: 'AUD' },
        },
        features: ['Everything in Individual', 'Policy management', 'Organization-wide settings', 'Admin tools'],
      },
    ],
  },
  // Continue with simpler single-plan services for brevity
  {
    id: 'disney-plus',
    name: 'Disney+',
    logo: '',
    category: 'streaming',
    plans: [
      {
        id: 'disney-plus-standard',
        name: 'Standard',
        pricing: {
          US: { monthly: 7.99, yearly: 79.99, currency: 'USD' },
          DE: { monthly: 8.99, yearly: 89.99, currency: 'EUR' },
          GB: { monthly: 7.99, yearly: 79.90, currency: 'GBP' },
          CH: { monthly: 10.90, yearly: 109.00, currency: 'CHF' },
          JP: { monthly: 990, yearly: 9900, currency: 'JPY' },
          AU: { monthly: 11.99, yearly: 119.99, currency: 'AUD' },
        },
        features: ['Marvel content', 'Star Wars', 'Pixar movies', '4K streaming'],
      },
    ],
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    logo: '',
    category: 'streaming',
    plans: [
      {
        id: 'prime-video-standard',
        name: 'Standard',
        pricing: {
          US: { monthly: 8.99, yearly: 107.88, currency: 'USD' },
          DE: { monthly: 8.99, yearly: 107.88, currency: 'EUR' },
          GB: { monthly: 8.99, yearly: 107.88, currency: 'GBP' },
          CH: { monthly: 8.99, yearly: 107.88, currency: 'CHF' },
          JP: { monthly: 500, yearly: 6000, currency: 'JPY' },
          AU: { monthly: 9.99, yearly: 119.88, currency: 'AUD' },
        },
        features: ['Amazon shipping', 'Original content', 'Twitch Prime', 'Music included'],
      },
    ],
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
      return category;
  }
}; 