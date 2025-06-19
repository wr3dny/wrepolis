import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";

import styles from "./SeriesSelect.module.css";

interface Props {
  availableSeries: string[];
  ownershipFilterOptions: string[];
  isOwned: boolean;
  handleSelect: () => void;
}

export const SeriesSelect = ({
  availableSeries,
  ownershipFilterOptions,
  isOwned,
  handleSelect,
}: Props) => {
  return (
    <div className={styles.container}>
      <CustomSelect
        options={ownershipFilterOptions}
        value={selectedSeries}
        onChange={handleSelect}
        placeholder="Select series"
      />

      {isOwned && (
        <CustomSelect
          options={availableSeries}
          value={selectedSeries}
          onChange={handleSelect}
          placeholder="Select series"
        />
      )}
    </div>
  );
};
