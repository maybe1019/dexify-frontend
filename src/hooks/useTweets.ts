import { useEffect, useState } from 'react';
import { getTweetsWithUserInfo } from '../api/twitter';
import utils from '../helpers/utils';

export function useTweets(managerAddr: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>({});
  useEffect(() => {
    getTweets();

    async function getTweets() {
      try {
        setLoading(true);
        const { data } = await getTweetsWithUserInfo(managerAddr);
        setResponse(data);
      } catch (error) {
        console.log(error);
        utils.notification.danger(
          'Axios Error',
          (error as any).response.data.error,
        );
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return { tweetsLoading: loading, tweetsData: response };
}
