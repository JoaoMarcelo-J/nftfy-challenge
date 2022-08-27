import styled from "styled-components";

export const NftCardContainer = styled.div`
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  height: 500px;
  width: 300px;

  &:hover {
    section {
      background-color: var(--gray-300);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px 16px 0 0;

  img {
    border-radius: 16px 16px 0 0;
  }
`;

export const Content = styled.section`
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
`;
