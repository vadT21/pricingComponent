import styled from "styled-components";

export const ToggleButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 48px 0;
`;
export const ToggleWrapper = styled.label`
  margin: 0 20px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  opacity: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 35px;
  &:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 4px;
    bottom: 4px;
    background-color: hsl(240, 78%, 98%);
    border-radius: 50%;
    transition: 0.4s;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(26px);
  }
`;

export const ToggleValue = styled.p`
  color: hsl(233, 13%, 49%);
  font-size: 0.85rem;
  letter-spacing: 0.5px;
`;
