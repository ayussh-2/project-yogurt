export { SponsorCard } from './SponsorCard';
export { TrackAccordion } from './TrackAccordion';
export { CallToAction } from './CallToAction';
export { TracksHeader } from './TracksHeader';
export { SponsorList } from './SponsorList';
export { GroupedSponsorList } from './GroupedSponsorList';
export { CategorySection } from './CategorySection';

export interface Track {
  prize: string;
  title: string;
  description: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  totalPrize: string;
  tracks: Track[];
  type?: 'Gamma' | 'Alpha' | 'Beta' | 'Delta' | 'Title';
}
