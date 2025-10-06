import React from 'react';

import { SponsorCard } from './SponsorCard';

interface Track {
  prize: string;
  title: string;
  description: string;
}

interface Sponsor {
  name: string;
  logo: string;
  totalPrize: string;
  tracks: Track[];
  type?: 'Gamma' | 'Alpha' | 'Beta' | 'Delta' | 'Title';
}

interface SponsorListProps {
  sponsors: Sponsor[];
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function SponsorList({
  sponsors,
  openKeys,
  onToggle,
}: SponsorListProps) {
  return (
    <div className="space-y-8">
      {sponsors.map((sponsor, sponsorIndex) => (
        <SponsorCard
          key={sponsor.name}
          sponsor={sponsor}
          sponsorIndex={sponsorIndex}
          openKeys={openKeys}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
