import styled from "styled-components";

export const CardListStyle = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 514px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
