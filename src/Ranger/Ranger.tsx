
import React, {
  FunctionComponent,
  useState,
  useEffect,
  useMemo
} from "react";

// Styles
import { RangerContainer, RangerTitle, RangerValue, RangerValueContainer } from "./styles/Ranger_Style";

// Types
import { RangerProps } from './Ranger.types';


const RangeSlider: FunctionComponent<RangerProps> = ({ className, label, onChange, value, ...sliderProps }) => {

  const [sliderVal, setSliderVal] = useState(0);
  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    setSliderVal(value);
  }, [value]);

  const changeCallback = e => {
    setSliderVal(e.target.value);
  };

  useEffect(() => {
    if (mouseState === "up") {
      onChange(sliderVal);
    }
  }, [mouseState]);

  return (
    <RangerContainer data-testid="Ranger_Test">
      <RangerTitle>{label}</RangerTitle>
      <RangerValueContainer>
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className={`slider ${className}`}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
        <RangerValue>{sliderVal}</RangerValue>
      </RangerValueContainer>
    </RangerContainer>
  );
}

export default RangeSlider;
