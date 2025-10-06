import React from 'react';

import { ChevronDown } from 'lucide-react';

import Typography from '@/components/Typography';
import { useAccordionResize } from '@/hooks/use-accordion-resize';

interface Track {
  prize: string;
  title: string;
  description: string;
}

interface TrackAccordionProps {
  track: Track;
  trackKey: string;
  isOpen: boolean;
  onToggle: (key: string) => void;
}

export function TrackAccordion({
  track,
  trackKey,
  isOpen,
  onToggle,
}: TrackAccordionProps) {
  // Handle resize events for smooth scroll recalculation when accordion state changes
  useAccordionResize(isOpen, 300);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 overflow-hidden">
      <button
        type="button"
        onClick={() => onToggle(trackKey)}
        className="w-full text-left p-4 smd:p-6 flex items-center justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col smd:flex-row items-start gap-6 flex-1">
          <div className="flex  items-center justify-center text-[var(--color-primary)] font-bold text-2xl font-averta-std">
            {track.prize}
          </div>

          <div className="flex-1">
            <Typography.H3 className="font-averta-std !text-2xl font-semibold text-[var(--color-heading)] mb-2">
              {track.title}
            </Typography.H3>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center">
          <ChevronDown
            className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6">
          <div className="">
            <div className="">
              <Typography.P className="text-sm text-[var(--color-subheading)] font-averta-std leading-relaxed m-0">
                {track.description}
              </Typography.P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
