import React from 'react';
import { twitterLogin } from '../../../../api/twitter';
import { ComponentSpinner } from '../../../../components/Spinner';

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
                  {tweetsData.user.twitterScreenName}
                </p>
                <p className="text-[15px] text-text-2 dark:text-text-2-dark mx-4">
                  {item.text}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="relative w-full h-full">
            <div className="text-center top-48 absolute w-full">
              {isManager ? (
                <button
                  onClick={onTwitterLogin}
                  className="ml-auto px-4 py-2 bg-blue-500/50 dark:bg-blue-900/50 rounded-lg font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-400 dark:hover:bg-blue-900"
                >
                  Connect Twitter
                </button>
              ) : (
                <p className="font-semibold text-lg">
                  Not found the manager's tweets
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tweets;
