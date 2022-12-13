import React from 'react';
import { twitterLogin } from '../../../../api/twitter';
import { ComponentSpinner } from '../../../../components/Spinner';
import { ReactComponent as TwitterIcon } from '../../../../assets/images/svg/twitter-icon.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';

type TweetsProps = {
  tweetsData: { tweets: Array<any>; user: User };
  loading: boolean;
  isManager: boolean;
};

const Tweets = ({ tweetsData, loading, isManager }: TweetsProps) => {
  const onTwitterLogin = () => {
    localStorage.setItem('twitter_login_location', 'account');
    twitterLogin();
  };
  return (
    <div className="card overflow-hidden">
      <div className="p-7 text-text-1 dark:text-text-1-dark text-xl header">
        Tweets
      </div>
      <div className="overflow-auto h-[460px] flex flex-col gap-3 p-4 m-2 relative">
        {loading && <ComponentSpinner />}
        {tweetsData && tweetsData.tweets && tweetsData.user ? (
          tweetsData.tweets.map((item, i) => (
            <div className="flex" key={i}>
              <img
                src={tweetsData.user.twitterImage}
                alt="default-user"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm mx-4">{tweetsData.user.twitterName}</p>
                <p className="text-[10px] text-[#5E889B] mx-4">
                  @{tweetsData.user.twitterScreenName}
                </p>
                <p className="text-[15px] text-text-2 dark:text-text-2-dark mx-4">
                  {item.text}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="relative">
              <TwitterIcon fill="gray" width={64} height={64} opacity={0.35} />
              <div className="absolute h-7 w-7 flex justify-center items-center bottom-[2px] right-[2px] bg-gray-300 dark:bg-gray-500 rounded-full border-white border-4 dark:border-bg-2-dark">
                <XMarkIcon
                  width={18}
                  color={'gray'}
                  className=" text-gray-400"
                />
              </div>
            </div>
            <p className="font-bold text-lg text-gray-500/50 text-[24px]">
              NO TWEETS
            </p>
            {isManager && !tweetsData.user?.twitterName && (
              <button
                onClick={onTwitterLogin}
                className="px-4 py-2 bg-blue-500/50 dark:bg-blue-900/50 rounded-lg font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-400 dark:hover:bg-blue-900"
              >
                Connect Twitter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tweets;
