import { ChangeEvent, useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";

interface Props {
  data: {
    setNumber: number;
    series: string;
  };
}
export const CategorySwitch = ({ data }: Props) => {
  const [selectedSeries, setSelectedSeries] = useState<string>("");

  const handleChange = (e: ChangeEvent<{ value: string }>) => {
    setSelectedSeries(e.target.value);
  };

  switch (selectedSeries) {
    case "Creator Expert":
      console.log(data.setNumber);
  }

  // switch(expression) {
  //  case constant-expression1: {
  //     //statements;
  //     break;
  //  }
  //  case constant_expression2: {
  //     //statements;
  //     break;
  //  }
  //  default: {
  //     //statements;
  //     break;
  //  }
  return <CustomSelect options={[]} value={""} onChange={() => handleChange} />;
};
