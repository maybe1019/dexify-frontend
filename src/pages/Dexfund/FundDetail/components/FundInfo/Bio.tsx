import React from 'react';

function Bio() {
  return (
    <div className="mx-2 text-text-2 dark:text-text-2-dark">
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="text-sm text-right">Name:</p>
        <p className="text-xs col-span-4 pt-0.5">Ryan Gosling</p>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="text-sm text-right">Age:</p>
        <p className="text-xs col-span-4 pt-0.5">
          Created 21st June 2021 (35 days old)
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="text-sm text-right">Bio:</p>
        <p className="text-xs col-span-4 pt-0.5">
          I am a experienced trader adn former analyst at goldman sachs. I have
          been invetsing in crypto for 7 years and Defi specifially since 2019.
          My favourite project is UNIswap I truly believe Defi can provide a
          more robust and fair financial system for all.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 py-5">
        <p className="text-sm text-right">Fund:</p>
        <p className="text-xs col-span-4 pt-0.5">
          This fund focuses on the DeFi gods. The Dexify portfolio rebalancing
          algorithm helps me keep the funds distribution optimal.
        </p>
      </div>
    </div>
  );
}

export default Bio;
