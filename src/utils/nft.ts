import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { NFT_ABI } from "../ABIs/nft";

export async function transferNft(from: string, to: string, tokenId: string) {
  const web3Modal: any = new Web3Modal({
    network: "0x4",
  });
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0x46bef163d6c470a4774f9585f3500ae3b642e751",
    NFT_ABI,
    signer
  );
  const result = await contract
    .transferFrom(from, to, tokenId)
    .then((res: any) => ({ hash: res.hash, error: null }))
    .catch(() => ({ hash: null, error: "Invalid transaction" }));
  return result;
}

export async function getNftMetaData(tokenId: string) {
  const web3Modal: any = new Web3Modal({
    network: "0x4",
  });
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0x46bef163d6c470a4774f9585f3500ae3b642e751",
    NFT_ABI,
    signer
  );
  const result = await contract.callStatic.tokenURI(tokenId);
  const response = await fetch(result);
  const data = response.json();
  return data;
}
