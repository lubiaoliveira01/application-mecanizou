import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: inline-grid;
  font-weight: 300;
  justify-content: center;
  width: 271px;

  ${({ theme }) => css`
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const ContentImgProduct = styled.div`
  align-content: center;
  border-radius: 12px;
  display: grid;
  height: 271px;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.white[300]};
  `}
`;

export const TagExpress = styled.span`
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.24),
    0px 1px 0px 0px rgba(255, 255, 255, 0.35) inset,
    0px -1px 0px 0px rgba(0, 0, 0, 0.04) inset;
  display: flex;
  font-style: italic;
  font-weight: 700;
  gap: 1rem;
  height: 24px;
  justify-content: center;
  margin: 1rem;
  padding: 4px 8px;
  position: absolute;
  width: 89px;

  ${({ theme }) => css`
    background-color: ${theme.colors.green[100]};
    color: ${theme.colors.white[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

//Section Product Style
export const ContentProduct = styled.section`
  display: inline-grid;
  margin: 1rem 0;
`;

export const BrandProduct = styled.span`
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.blue[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const TitleProduct = styled.span`
  font-weight: 600;
  line-height: 24px;
  margin: 0.5rem 0;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const CodeProduct = styled.span`
  font-weight: 400;
  opacity: 0.85;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

//Section Pricing Style
export const ContentPricing = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const PrevPrice = styled.p`
  text-decoration: line-through;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const CurrentPrice = styled.p`
  display: flex;
  font-weight: 600;
  margin: 0.5rem 0;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const PriceCents = styled.span`
  font-weight: 600;
  margin-left: 0.25rem;
  padding-top: 0.15rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const InstallmentPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

//Tag Style
export const TagDiscount = styled.div`
  align-items: center;
  border-radius: 1rem 0 0 1rem;
  display: inline-flex;
  font-weight: 700;
  height: 24px;
  max-width: 120px;
  padding: 0.5rem;
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.green[300]};
    color: ${theme.colors.green[200]};
    font-size: ${theme.font.sizes.xsmall};
  `}

  &::before {
    background: white;
    border-radius: 50%;
    content: "";
    height: 5px;
    left: 8px;
    position: absolute;
    width: 5px;
  }
`;

export const TextDiscount = styled.span`
  margin-left: 1.5rem;
`;

//Button Style
export const ButtonAddProduct = styled.button`
  align-items: center;
  border: none;
  border-radius: 2.5rem;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  gap: 0.5rem;
  height: 2.5rem;
  justify-content: center;
  margin-top: 1rem;
  padding: 1.5rem 2rem;

  ${({ theme }) => css`
    color: ${theme.colors.blue[200]};
    background-color: ${theme.colors.blue[100]};
    font-family: ${theme.font.family.inter};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const IconCartAdd = styled.img`
  width: 1.5rem;
`;
