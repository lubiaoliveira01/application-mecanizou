import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-weight: 500;
  padding: 2rem 20%;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const TabSelect = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[400]};
  `}
`;

export const IconArrow = styled.img`
  margin: 0rem 1rem;
`;
