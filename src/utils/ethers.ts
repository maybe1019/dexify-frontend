import { ethers } from 'ethers';

export const signMessage = async (
  library: ethers.providers.JsonRpcProvider,
) => {
  const signer = await library.getSigner();
  const address = await library.getSigner().getAddress();
  const signature = await signer.signMessage(address as string);
  return { signature, address };
};
