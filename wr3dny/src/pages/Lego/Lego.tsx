import { Key, useMemo, useState } from "react";
import styles from "./Lego.module.css";
import { useLegoList } from "./useListOrganizer";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";

const ownershipOptions = ["wanted", "perhaps", "owned"] as const;

export const Lego = () => {
  const {
    sortedAllLegoWishlist,
    sortedPrimaryWantedList,
    sortedOwnedList,
    sortedSeries,
  } = useLegoList();

  const [viewType, setViewType] =
    useState<(typeof ownershipOptions)[number]>("wanted");

  const [selectedSeries, setSelectedSeries] = useState<string>("all");

  const availableSeries = useMemo(
    () => ["all", ...sortedSeries],
    [sortedSeries]
  );

  const listToDisplay = useMemo(() => {
    if (viewType === "owned") {
      return selectedSeries === "all"
        ? sortedOwnedList
        : sortedOwnedList.filter((set) => set.series === selectedSeries);
    } else if (viewType === "perhaps") {
      return sortedAllLegoWishlist;
    }
    return sortedPrimaryWantedList;
  }, [
    viewType,
    selectedSeries,
    sortedOwnedList,
    sortedAllLegoWishlist,
    sortedPrimaryWantedList,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <CustomSelect
          options={ownershipOptions as unknown as string[]}
          value={viewType}
          onChange={(val) =>
            setViewType(val as (typeof ownershipOptions)[number])
          }
          placeholder="Select list"
        />
        {viewType === "owned" && (
          <CustomSelect
            options={availableSeries}
            value={selectedSeries}
            onChange={(val) => setSelectedSeries(val as string)}
            placeholder="Select series"
          />
        )}
      </div>

      <div className={styles.display}>
        {listToDisplay.map(
          (set: {
            setNumber: Key | null | undefined;
            url: string | undefined;
            image: string | undefined;
            alt: string | undefined;
          }) => (
            <div key={set.setNumber}>
              <a
                href={set.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <img src={set.image} alt={set.alt} className={styles.img} />
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};
