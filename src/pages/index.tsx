import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

//utils
import { transferNft } from "../utils/nft";
import { gql, useQuery } from "@apollo/client";
import { useEthers } from "@usedapp/core";

//components
import { Header } from "../components/header";
import { NftCard } from "../components/nftCard";

//styles
import * as S from "../styles/home";

const NFTS = gql`
  query Nft($address: String!) {
    erc721ByOwner(chainIdList: [4], ownerAddress: $address) {
      name
      address
      tokenId
    }
  }
`;

const Home: NextPage = () => {
  const { account } = useEthers();
  const [recipient, setRecipient] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [error, setError] = useState();
  const [hash, setHash] = useState();

  const { data } = useQuery(NFTS, {
    variables: { address: account },
  });

  async function handleTransferNft() {
    const { error, hash } = await transferNft(
      account as string,
      recipient,
      tokenId
    );

    if (error) {
      setError(error);
    }

    if (hash) {
      setHash(hash);
    }
  }

  return (
    <>
      <Header />
      <S.HomeContainer>
        <Head>
          <title>Create Next App</title>
        </Head>

        <S.TransferNftInputsContainer>
          <p>
            Transfer Nft: <span>{tokenId}</span>{" "}
          </p>
          <div>
            <input
              type="text"
              placeholder="Address to send"
              onChange={(e) => setRecipient(e.target.value)}
            />
            <button type="button" onClick={handleTransferNft}>
              Send Nft
            </button>
          </div>
        </S.TransferNftInputsContainer>
        <S.FeedbackMessageContainer>
          {error && account && !hash && <p>{error}</p>}
          {hash && (
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://rinkeby.etherscan.io/tx/${hash}`}
            >
              Transaction sent. View Your transaction at : <span>{hash}</span>
            </a>
          )}
        </S.FeedbackMessageContainer>

        <S.NftsList>
          {data?.erc721ByOwner.map((nft: any) => (
            <NftCard
              aria-hidden="true"
              key={nft.tokenId}
              tokenId={nft.tokenId}
              onClick={() => setTokenId(nft.tokenId)}
            />
          ))}
        </S.NftsList>
      </S.HomeContainer>
    </>
  );
};

export default Home;
