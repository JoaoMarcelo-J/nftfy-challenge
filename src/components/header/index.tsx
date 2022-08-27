//utils
import { ConnectWalletButton } from "../connectWalletButton";

//styles
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      NftFy
      <ConnectWalletButton />
    </S.HeaderContainer>
  );
};
