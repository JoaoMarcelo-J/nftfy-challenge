import styled from "styled-components";

export const NftCardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  div {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    background-color: var(--gray-400);
    padding: 1rem;
    border-radius: 0 0 16px 16px;
    transition: all 0.2s;

    @media (max-width: 767px) {
      max-width: 300px;
      max-height: 380px;
    }

    p {
      font-size: 12px;
    }
  }

  &:hover {
    div {
      background-color: var(--gray-300);
    }
  }

  img {
    width: 360px;
    height: 400px;
    border-radius: 16px 16px 0 0;

    @media (max-width: 767px) {
      width: 300px;
      height: 380px;
    }
  }
`;
