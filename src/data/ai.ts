export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  properties?: string[];
  chips?: string[];
}

export const initialMessages: ChatMessage[] = [
  {
    id: 'm1',
    role: 'assistant',
    content: "Hi, I'm your AfriBook AI travel companion. Describe the trip you're dreaming of and I'll find the perfect stays across Africa.",
    timestamp: Date.now() - 60000,
    chips: ['Beach getaway', 'Business trip', 'Romantic weekend', 'Family vacation'],
  },
];

export const aiResponses: Record<string, { content: string; chips?: string[] }> = {
  'beach': {
    content: "I found 12 beachfront options matching your preferences. Here are the top picks based on ocean views, pool access, and price.",
    chips: ['Cheaper options', 'Add breakfast', 'Show only 5-star', 'More details'],
  },
  'business': {
    content: "I found 8 business-friendly hotels near Abidjan airport. All have fast Wi-Fi, conference rooms, and airport shuttles.",
    chips: ['Cheaper options', 'Add breakfast', 'Closer to airport', 'With parking'],
  },
  'romantic': {
    content: "Here are 6 romantic getaways perfect for couples. I've filtered for ocean views, spa services, and private balconies.",
    chips: ['Under 100,000 FCFA', 'With spa', 'Ocean view only', 'All-inclusive'],
  },
  'family': {
    content: "I found 5 family-friendly options with pools, gardens, and family rooms. Based on your past bookings, you'll love these.",
    chips: ['Under 80,000 FCFA', 'With kids pool', '5+ bedrooms', 'Pet friendly'],
  },
  'last-minute': {
    content: "4 hotels available for tonight in Abidjan with instant booking. Prices are 15% lower than usual.",
    chips: ['Show all', 'Under 50,000 FCFA', 'Near airport', '4+ stars'],
  },
  'cheaper': {
    content: "Here are 5 more affordable options under 50,000 FCFA per night. All still highly rated and with Mobile Money accepted.",
    chips: ['Under 35,000 FCFA', 'Add breakfast', 'Near airport', 'With pool'],
  },
  'breakfast': {
    content: "Filtered to show only properties with complimentary breakfast included. 4 options match.",
    chips: ['Cheaper options', 'Near airport', 'Show all', '5-star only'],
  },
  '5-star': {
    content: "Here are the top-rated 5-star hotels in your area. All rated 4.7+ with exceptional service.",
    chips: ['Cheaper options', 'Add breakfast', 'Family friendly', 'More details'],
  },
  'default': {
    content: "I've analyzed 247 properties across 8 African cities. Based on your request, here are the best matches with AI confidence scores.",
    chips: ['Cheaper options', 'Add breakfast', 'Family friendly', 'Show only 5-star'],
  },
};

export const followUpChips = [
  'Cheaper options',
  'Add breakfast',
  'Family friendly',
  'Show only 5-star hotels',
  'Pet friendly',
  'Near airport',
];

export const conciergeSuggestions = [
  {
    id: 'airport',
    title: 'Airport Transfer',
    description: 'Book a private car from Félix Houphouët-Boigny Airport to your hotel. 25-minute drive.',
    price: 15000,
    icon: 'plane',
  },
  {
    id: 'taxi',
    title: 'Taxi Booking',
    description: 'On-demand taxi service with vetted local drivers. Cash or Mobile Money.',
    price: 3500,
    icon: 'car',
  },
  {
    id: 'restaurant',
    title: 'Restaurant Recommendations',
    description: 'Top-rated local restaurants within 2km. Ivoirian, French, and international cuisine.',
    price: 0,
    icon: 'utensils',
  },
  {
    id: 'events',
    title: 'Local Events',
    description: '3 events happening this weekend: live music, art exhibition, and food festival.',
    price: 5000,
    icon: 'calendar',
  },
  {
    id: 'tours',
    title: 'Tourist Activities',
    description: 'Guided tours to Assinie Beach, Banco National Park, and local markets.',
    price: 25000,
    icon: 'map',
  },
  {
    id: 'sim',
    title: 'Local SIM Card',
    description: 'Get a local data SIM card delivered to your hotel. Orange or MTN available.',
    price: 8000,
    icon: 'signal',
  },
];
