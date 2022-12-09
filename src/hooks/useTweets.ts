import { useEffect, useState } from 'react';
import { getTweetsWithUserInfo } from '../api/twitter';

export function useTweets(managerAddr: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>({});
  useEffect(() => {
    getTweets();

    async function getTweets() {
      try {
        setLoading(true);
        const data = await getTweetsWithUserInfo(managerAddr);
        setResponse(data);
      } catch (error: any) {
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return { tweetsLoading: loading, tweetsData: response };
}
