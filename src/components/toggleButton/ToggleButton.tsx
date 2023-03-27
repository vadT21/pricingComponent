import {
  ToggleInput,
  ToggleWrapper,
  ToggleSlider,
  ToggleButtonStyle,
  ToggleValue,
} from "./ToggleButton.styles";

type Props = {
  toogle: boolean;
  setToogle: (toogle: boolean) => void;
};

const ToggleButton: React.FC<Props> = ({ toogle, setToogle }) => {
  return (
    <ToggleButtonStyle>
      <ToggleValue>Annually</ToggleValue>
      <ToggleWrapper>
        <ToggleInput
          type="checkbox"
          name="toggle"
          checked={toogle}
          onChange={() => setToogle(!toogle)}
          id="toggle"
        />
        <ToggleSlider></ToggleSlider>
      </ToggleWrapper>
      <ToggleValue>Monthly</ToggleValue>
    </ToggleButtonStyle>
  );
};

export default ToggleButton;
