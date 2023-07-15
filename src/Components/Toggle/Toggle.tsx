import styled from "styled-components";
import { ToggleTypes } from "./types";

const StyledToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 54px;
  height: 31px;
  border-radius: 100vh;
  background-color: lightgrey;

  &::after {
    content: "";
    position: absolute;
    top: 1.5px;
    left: 2px;
    display: block;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: white;
    transition: all 300ms ease;
  }
`;

const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  width: 54px;
  height: 31px;
  &:checked + ${Label} {
    background-color: orange;
    &::after {
      content: "";
      top: 1.5px;
      display: block;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      margin-left: 41%;
      transition: all 300ms ease;
    }
  }
`;

const Toggle = ({
  className,
  onChange,
  checked,
  id,
}: ToggleTypes) => {
  return (
    <StyledToggle className={className}>
      <Checkbox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      ></Checkbox>
      <Label htmlFor={id} />
    </StyledToggle>
  );
};

export default Toggle;
