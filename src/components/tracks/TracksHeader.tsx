import React from 'react';

import Typography from '@/components/Typography';

export function TracksHeader() {
  return (
    <div className="mb-16 text-center">
      <Typography.H1 className="font-wc-rough-trad text-[clamp(3.5rem,5vw,6rem)] text-[var(--color-primary)] mb-6">
        Hackathon Tracks
      </Typography.H1>
      <Typography.Lead className="text-[var(--color-subheading)] font-averta-std max-w-3xl mx-auto">
        Explore sponsor-backed tracks and prize details. Click each track to
        view its full description and unlock amazing opportunities.
      </Typography.Lead>
    </div>
  );
}
