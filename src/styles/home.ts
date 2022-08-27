import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    text-align: center;
    &:hover {
      span {
        color: var(--brand-blue-dark);
      }
    }
  }

  a > span {
    color: var(--brand-blue);
    font-size: 14px;

    @media (max-width: 767px) {
      font-size: 8px;
    }
  }
`;

export const NftsList = styled.div`
  margin: 2.6rem 0;
  display: grid;
  row-gap: 1.4rem;
  column-gap: 1.2rem;
  flex-direction: column;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TransferNftInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 20px;

  p {
    font-size: 2rem;
    font-weight: 600;

    span {
      color: var(--brand-purple);
    }
  }

  input {
    border: 0;
    background-color: var(--gray-400);
    padding: 0.675rem 0.62rem;
    border-radius: 8px;
    width: 250px;
  }

  button {
    border: 0;
    border-radius: 12px;
    padding: 0.625rem 1rem;
    background-color: var(--brand-purple);
    transition: all 0.2s;

    &:hover {
      background-color: var(--brand-purple-dark);
    }
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const FeedbackMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 1.6rem;
    color: var(--danger);
    font-weight: bold;
  }
`;
