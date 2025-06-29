import { LegoSet, LegoWishlist } from "../../const/lego";
import { ownedSetsList, perhapsList } from "../../const/ownedSets";

export const useLegoList = () => {
  const ownedSets: LegoSet[] = LegoWishlist.filter((set) =>
    ownedSetsList.includes(set.setNumber)
  );

  const allWantedSets: LegoSet[] = LegoWishlist.filter(
    (set) => !ownedSetsList.includes(set.setNumber)
  );

  const primaryWantedSets = allWantedSets.filter(
    (set) => !perhapsList.includes(set.setNumber)
  );

  const seriesNames = [...new Set(LegoWishlist.map((set) => set.series))];

  const sortedAllLegoWishlist = [...allWantedSets].sort(
    (a, b) => a.price - b.price
  );

  const sortedPrimaryWantedList = [...primaryWantedSets].sort(
    (a, b) => a.price - b.price
  );

  const sortedOwnedList = [...ownedSets].sort((a, b) => a.year - b.year);

  const sortedSeries = [...seriesNames].sort((a, b) => a.localeCompare(b));

  return {
    sortedAllLegoWishlist,
    sortedPrimaryWantedList,
    sortedOwnedList,
    sortedSeries,
  };
};
