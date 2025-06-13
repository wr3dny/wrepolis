import { useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";
import { useListOrganizer } from "../useListOrganizer";

export const SeriesSelect = () => {
  const { seriesName } = useListOrganizer();
  const [selectedSeries, setSelectedSeries] = useState<string>("");
  const options = seriesName.map((name: string) => ({
    label: name,
    value: name,
  }));

  return (
    <CustomSelect
      options={options}
      value={selectedSeries}
      onChange={(value) => setSelectedSeries(String(value))}
      placeholder="Select series"
    />
  );
};
