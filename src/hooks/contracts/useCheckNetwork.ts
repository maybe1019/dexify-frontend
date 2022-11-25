import { BSC, useEthers } from '@usedapp/core';
import { useMemo } from 'react';
export const useCheckNetwork = () => {
  const { chainId } = useEthers();

  const isWrongNetwork = useMemo(
    () => !(BSC.chainId === chainId),
    [BSC.chainId, chainId],
  );

  return { isWrongNetwork };
};
