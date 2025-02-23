import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const Wrapper = styled.div`
  display: grid;
  flex-direction: column;
  gap: 4rem 2rem;
  grid-template-columns: 1fr;
  justify-content: space-between;
  justify-self: anchor-center;
  margin-bottom: 2rem;
  padding: 0 5%;

  ${mediaQueries.greaterThan("sm")`
    grid-template-columns: 1fr 1fr;
  `}

  ${mediaQueries.greaterThan("lg")`
    grid-template-columns: 1fr 1fr 1fr;
  `}

${mediaQueries.greaterThan("xl")`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;
