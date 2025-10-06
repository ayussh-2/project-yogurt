import React from 'react';

import Typography from '@/components/Typography';

export function CallToAction() {
  return (
    <div className="mt-20 text-center">
      <div className="p-12 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <Typography.H3 className="font-averta-std text-3xl font-bold text-[var(--color-heading)] mb-6">
          Ready to Build Something Amazing?
        </Typography.H3>
        <Typography.P className="text-[var(--color-subheading)] font-averta-std mb-8 max-w-2xl mx-auto text-lg">
          Join the hackathon and compete for these incredible prizes. Show off
          your skills and innovation!
        </Typography.P>
        <button className="px-10 py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold text-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
}
