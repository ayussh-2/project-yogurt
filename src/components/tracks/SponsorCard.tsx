import React from 'react';

import { Clock } from 'lucide-react';
import Image from 'next/image';

import Typography from '@/components/Typography';

import { TrackAccordion } from './TrackAccordion';

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

interface SponsorCardProps {
  sponsor: Sponsor;
  sponsorIndex: number;
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
  hideTrackType?: boolean;
}

export function SponsorCard({ sponsor, openKeys, onToggle }: SponsorCardProps) {
  return (
    <section
      aria-label={`${sponsor.name} sponsor`}
      className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 smd:p-8 shadow-sm"
    >
      <header className="flex smd:flex-row flex-col flex-start smd:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="size-24 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-600">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <div>
            <Typography.H3 className="font-averta-std font-bold text-[var(--color-heading)] mb-2">
              {sponsor.name}
            </Typography.H3>
          </div>
        </div>

        <div className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-xl !w-fit">
          {sponsor.totalPrize}
        </div>
      </header>

      {sponsor.tracks && sponsor.tracks.length > 0 ? (
        <div className="space-y-4">
          {sponsor.tracks.map((track, trackIndex) => (
            <TrackAccordion
              key={`${sponsor.name}-${trackIndex}`}
              track={track}
              trackKey={`${sponsor.name}-${trackIndex}`}
              isOpen={!!openKeys[`${sponsor.name}-${trackIndex}`]}
              onToggle={onToggle}
            />
          ))}
        </div>
      ) : (
        <div className="p-4 smd:p-8 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
            <Clock className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          </div>
          <Typography.P className="text-base font-averta-std text-[var(--color-subheading)] m-0">
            Track details coming soon! Stay tuned for exciting challenges from{' '}
            {sponsor.name}.
          </Typography.P>
        </div>
      )}
    </section>
  );
}
