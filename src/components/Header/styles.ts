import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 5rem;
  gap: 2rem;
  display: flex;
  padding: 0 20%;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.blue[200]};
  `}
`;

export const ButtonShoppingCart = styled.button`
  border: none;
  border-radius: 2.5rem;
  cursor: pointer;

  align-items: center;
  display: flex;
  gap: 0.75rem;
  height: 2.5rem;
  padding: 1rem;

  ${({ theme }) => css`
    color: ${theme.colors.white[400]};
    background-color: ${theme.colors.blue[300]};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const IconShopCart = styled.img`
  width: 1rem;
`;

export const ContentUser = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0.6rem; //token

  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 3rem;
  padding: 0.5rem;

  &:active {
    box-shadow: 0px 0px 10px 1px rgba(107, 107, 107, 1);
  }

  ${({ theme }) => css`
    color: ${theme.colors.white[400]};
    font-size: ${theme.font.sizes.small};

    &:hover {
      background-color: ${theme.colors.blue[400]};
    }
  `}
`;

export const IconHome = styled.img`
  width: 1.25rem;
`;

export const IconArrow = styled.img`
  width: 1rem;
`;

export const ButtonInfo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconInfo = styled.img`
  width: 1.5rem;
`;
