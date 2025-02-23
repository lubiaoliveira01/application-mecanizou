import styled, { css } from "styled-components";

export const Content = styled.label`
  position: relative;
`;

export const InputSearch = styled.input`
  border: none;
  border-radius: 0.6rem;
  box-sizing: border-box;
  font-weight: 300;

  display: block;
  height: 3rem;
  padding: 1rem 3rem 1rem;
  resize: none;
  width: 38.75rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.blue[400]};
    color: ${theme.colors.white[100]};
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.sizes.medium};

    &::placeholder {
      color: ${theme.colors.white[500]};
    }
  `}

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const IconSearch = styled.img`
  margin: 0.85rem 1rem;
  position: absolute;
  width: 1.25rem;
`;
