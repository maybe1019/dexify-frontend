import React from 'react';

const Tweets = () => {
  return (
    <div className="card overflow-hidden">
      <div className="p-7 text-text-1 dark:text-text-1-dark text-xl header">
        Tweets
      </div>
      <div className="overflow-auto h-[460px] flex flex-col gap-3 p-4 m-2">
        {Array(5)
          .fill(1)
          .map((item, i) => (
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
          ))}
      </div>
    </div>
  );
};

export default Tweets;
