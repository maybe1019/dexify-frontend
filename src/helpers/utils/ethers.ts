import { ethers } from 'ethers';

export const signMessage = async (
  library: ethers.providers.JsonRpcProvider,
  account?: string,
) => {
  const signer = library.getSigner();
  const address = account ? account : await library.getSigner().getAddress();
  const signature = await signer.signMessage(address);
  return { signature, address };
};
