import { useState } from "react";
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";
import { useListOrganizer } from "../useListOrganizer";

import styles from "./SeriesSelect.module.css";

export const SeriesSelect = () => {
  const { seriesNames } = useListOrganizer();
  const [selectedSeries, setSelectedSeries] = useState<string>("");
  const [owned, setOwned] = useState(false);

  const sortedSeries = [...seriesNames].sort((a, b) => a.localeCompare(b));

  const options = sortedSeries.map((name: string) => ({
    label: name,
    value: name,
  }));

  const typeOptions = [
    { label: "Wanted", value: "wanted" },
    { label: "Owned", value: "owned" },
  ];

  const handleTypeSelect = (val: string) => {
    if (val === "owned") {
      setOwned(true);
    }
    if (val === "wanted") {
      setOwned(false);
    }
  };

  return (
    <div className={styles.container}>
      <CustomSelect
        options={typeOptions}
        value={selectedSeries}
        onChange={(value) => handleTypeSelect(String(value))}
        placeholder="Select series"
      />

      {owned && (
        <CustomSelect
          options={options}
          value={selectedSeries}
          onChange={(value) => setSelectedSeries(String(value))}
          placeholder="Select series"
        />
      )}
    </div>
  );
};
