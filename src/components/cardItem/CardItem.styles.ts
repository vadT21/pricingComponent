import styled from "styled-components";

export const CardItemStyles = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(240, 78%, 98%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 30px 0;
  color: hsl(233, 13%, 49%);
  :hover {
    background: linear-gradient(
      to right,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
    color: hsl(240, 78%, 98%);
    transform: scale(1.15);
    & button {
      background: hsl(240, 78%, 98%);
      color: hsl(237, 63%, 64%);
    }
  }
  @media (min-width: 768px) {
    width: 240px;
    margin: 5px;
    :hover {
      transform: scale(1.05);
    }
  }
`;

export const CardItemInfoButton = styled.button`
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  color: hsl(240, 78%, 98%);
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const CardItemTitle = styled.h2`
  font-size: 1.25rem;
  padding: 10px;
  @media (min-width: 768px) {
    font-size: 24px;
    padding: 5px;
  }
`;

export const CardItemPrice = styled.h3`
  font-size: 4rem;
  display: flex;
  align-items: center;
  padding: 10px;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const CardOptionList = styled.ul`
  padding: 10px 0;
  list-style: none;
  width: 100%;
  &:before {
    content: "";
    display: block;
    border-top: 1px solid hsl(234, 14%, 74%);
  }
  margin-bottom: 15px;
`;

export const CardOptionItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid hsl(234, 14%, 74%);
`;

export const Span = styled.span`
  padding-right: 5px;
  font-size: 2rem;
`;
