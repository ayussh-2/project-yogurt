import React from 'react';

import { CategorySection } from './CategorySection';

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

interface GroupedSponsorListProps {
  sponsors: Sponsor[];
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function GroupedSponsorList({
  sponsors,
  openKeys,
  onToggle,
}: GroupedSponsorListProps) {
  const groupedSponsors = sponsors.reduce(
    (acc, sponsor) => {
      const type = sponsor.type || 'Other';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(sponsor);
      return acc;
    },
    {} as Record<string, Sponsor[]>
  );

  const typeOrder = ['Title', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Other'];

  return (
    <div className="space-y-12">
      {typeOrder.map((trackType) => {
        const sponsorsInCategory = groupedSponsors[trackType] || [];
        if (sponsorsInCategory.length === 0) return null;

        return (
          <CategorySection
            key={trackType}
            categoryType={trackType}
            sponsors={sponsorsInCategory}
            openKeys={openKeys}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}
