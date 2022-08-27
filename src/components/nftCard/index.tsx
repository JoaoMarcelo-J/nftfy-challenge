import { HTMLAttributes, useEffect, useState } from "react";

//utils
import { getNftMetaData } from "../../utils/nft";

//styles
import * as S from "./styles";

interface NftCardProps extends HTMLAttributes<HTMLDivElement> {
  tokenId: string;
}

type NftData = {
  name: string;
  image: string;
  description: string;
};

export const NftCard = ({ tokenId, ...props }: NftCardProps) => {
  const [nftData, setNftData] = useState<NftData | undefined>(undefined);

  useEffect(() => {
    async function getNftData() {
      const nftData = await getNftMetaData(tokenId);
      setNftData(nftData);
    }
    getNftData();
  }, [tokenId]);

  if (!nftData) {
    return <div></div>;
  }

  return (
    <S.NftCardContainer {...props}>
      <img src={nftData.image} alt={nftData.name} />
      <div>
        <h2>{nftData.name}</h2>
        <p>{nftData.description.substring(0, 300)}...</p>
      </div>
    </S.NftCardContainer>
  );
};
