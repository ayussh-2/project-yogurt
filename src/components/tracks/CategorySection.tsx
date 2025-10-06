import React from 'react';

import Typography from '@/components/Typography';

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

interface CategorySectionProps {
  categoryType: string;
  sponsors: Sponsor[];
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function CategorySection({
  categoryType,
  sponsors,
  openKeys,
  onToggle,
}: CategorySectionProps) {
  if (sponsors.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="mb-8 text-center">
        <Typography.H1 className="font-wc-rough-trad text-[clamp(2.5rem,4vw,4rem)] text-[var(--color-primary)] mb-4">
          {categoryType} Sponsors
        </Typography.H1>
      </div>

      <div className="space-y-6">
        {sponsors.map((sponsor, index) => {
          const sponsorIndex = index;
          return (
            <SponsorCard
              key={sponsor.name}
              sponsor={sponsor}
              sponsorIndex={sponsorIndex}
              openKeys={openKeys}
              onToggle={onToggle}
              hideTrackType={true}
            />
          );
        })}
      </div>
    </div>
  );
}
