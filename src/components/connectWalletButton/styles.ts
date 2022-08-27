import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 0;
  padding: 0.625rem 1.6rem;
  background-color: var(--brand-blue);
  border-radius: 12px;
  transition: all 0.2s;
  font-weight: 600;

  &:hover {
    background-color: var(--brand-blue-dark);
  }
`;
