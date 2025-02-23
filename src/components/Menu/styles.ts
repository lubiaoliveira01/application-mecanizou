import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0px 2px 2px -0.5px #00000014;
  align-items: center;
  display: flex;
  height: 4rem;
  padding: 0 20%;
  justify-content: space-between;
`;

export const ContentMenu = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-right: 1rem;
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.sizes.medium};

    &:hover {
      background-color: ${theme.colors.white[400]};
    }

    &:active {
      box-shadow: 0px 0px 5px 1px ${theme.colors.white[500]};
    }
  `}
`;

export const IconArrow = styled.img`
  width: 1.5rem;
`;

export const ButtonBudget = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 12.5rem;
  display: flex;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 1rem;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.white[400]};
    color: ${theme.colors.gray[300]};

    font-size: ${theme.font.sizes.medium};
  `}
`;
