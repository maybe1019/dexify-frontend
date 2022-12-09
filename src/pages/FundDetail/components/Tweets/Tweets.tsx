import React from 'react';
import { twitterLogin } from '../../../../api/twitter';
import { ComponentSpinner } from '../../../../components/Spinner';

type TweetsProps = {
  tweets: Array<any>;
  loading: boolean;
  isManager: boolean;
};

const Tweets = ({ tweets, loading, isManager }: TweetsProps) => {
  const onTwitterLogin = () => {
    localStorage.setItem('twitter_login_location', 'account');
    twitterLogin();
  };
  console.log(isManager);
  return (
    <div className="card overflow-hidden">
      <div className="p-7 text-text-1 dark:text-text-1-dark text-xl header">
        Tweets
      </div>
      <div className="overflow-auto h-[460px] flex flex-col gap-3 p-4 m-2 relative">
        {loading && <ComponentSpinner />}
        {tweets ? (
          tweets.map((item, i) => (
            <div className="flex" key={i}>
              <img
                src="/images/default-user.png"
                alt="default-user"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm mx-4">Ryan Gosling</p>
                <p className="text-[10px] text-[#5E889B] mx-4">@gosling685</p>
                <p className="text-[15px] text-text-2 dark:text-text-2-dark mx-4">
                  News from the SEC on the XRP Case! This is huge for the
                  adoption of crypto, regulation will bring mass adoption!
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
