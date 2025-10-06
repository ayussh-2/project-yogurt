'use client';

import React, { useState } from 'react';

import { GroupedSponsorList, TracksHeader } from '@/components/tracks';
import { sponsorTracks } from '@/config/tracks';

const sortedSponsors = [...sponsorTracks].sort((a, b) => {
  const typeOrder = ['Title', 'Alpha', 'Beta', 'Gamma', 'Delta'];
  const aIndex = typeOrder.indexOf(a.type || 'Delta');
  const bIndex = typeOrder.indexOf(b.type || 'Delta');
  return aIndex - bIndex;
});

export default function TracksPage() {
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-900">
      <div className="py-20 mt-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <TracksHeader />
          <GroupedSponsorList
            sponsors={sortedSponsors}
            openKeys={openKeys}
            onToggle={toggle}
          />
        </div>
      </div>
    </main>
  );
}
