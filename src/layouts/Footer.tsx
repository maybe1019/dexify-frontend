import React from 'react';
import { ReactComponent as TwitterIcon } from '../assets/images/svg/twitter-square.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/svg/linkedin-square.svg';
import { ReactComponent as TelegramIcon } from '../assets/images/svg/telegram-square.svg';

export const Footer = () => {
  return (
    <footer className="bg-bg-2 dark:bg-bg-2-dark">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="opacity-70 text-sm font-bold">
          ©2021 by DEXIFY Ltd | All Rights Reserved
        </div>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/DexifyHQ"
            target={'_blank'}
            className="hover:opacity-80 shadow-lg"
          >
            <TwitterIcon width={32} height={32} />
          </a>
          <a
            href="https://t.me/DEXIFYHQ"
            target={'_blank'}
            className="hover:opacity-80 shadow-lg"
          >
            <TelegramIcon width={32} height={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/dexifyhq"
            target={'_blank'}
            className="hover:opacity-80 shadow-lg"
          >
            <LinkedinIcon width={32} height={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};
