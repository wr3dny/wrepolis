import { useState } from "react";

interface Props {
  nameBefore: string;
  nameAfter: string;
}

export const ToggleButton = ({ nameBefore, nameAfter }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  const getName = () => {
    return isToggled ? nameAfter : nameBefore;
  };

  return <div onClick={toggle}>{getName()}</div>;
};
