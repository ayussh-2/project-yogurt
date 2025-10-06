import { Sponsor } from '@/components/tracks';

export const sponsorTracks: Sponsor[] = [
  {
    name: 'Verbwire',
    logo: 'https://res.cloudinary.com/dfe8sdlkc/image/upload/v1757622762/verbwire_logo.svg_c3fwsl.svg',
    totalPrize: '$5,000',
    type: 'Gamma',
    tracks: [
      {
        prize: '$4,000',
        title: 'Best Use of AI & Verbwire API',
        description:
          'Awarded for the best integration of AI with the Verbwire API.',
      },
      {
        prize: '$1,000',
        title: 'Most Innovative Use Of Verbwire API',
        description:
          'Up to $1,000 in Premium API Credits, across up to 5 teams ($45 credit per team member).',
      },
    ],
  },

  {
    name: 'ETHIndia',
    logo: 'https://res.cloudinary.com/dhv234qct/image/upload/v1736925948/hn6/6.0%20spons/x8c696hj5wqhumhqcwol.png',
    totalPrize: '$100',
    tracks: [
      {
        prize: '$100',
        title: 'Best hack built on Ethereum',
        description:
          "Select this track if you're building on Ethereum to be eligible for the prizes!",
      },
    ],
    type: 'Beta',
  },
];
