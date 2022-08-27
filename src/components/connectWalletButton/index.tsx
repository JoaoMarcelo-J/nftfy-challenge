//utils
import { useEthers } from "@usedapp/core";

//Styles
import * as S from "./styles";

export const ConnectWalletButton = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return (
    <S.ButtonContainer onClick={account ? deactivate : activateBrowserWallet}>
      {account ? account.substring(0, 8) : "Connect"}
    </S.ButtonContainer>
  );
};
