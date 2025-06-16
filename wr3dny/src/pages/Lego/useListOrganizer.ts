import { LegoWishlist } from "../../const/lego";
import { ownedSetsList } from "../../const/ownedSets";

export const useListOrganizer = () => {
  const ownedSets = LegoWishlist.filter((set) =>
    ownedSetsList.includes(set.setNumber)
  );

  const wantedSets = LegoWishlist.filter(
    (item1) => !ownedSets.some((item2) => item1.price === item2.price)
  );

  const sortedLegoWishlist = [...wantedSets].sort((a, b) => a.price - b.price);

  const sortedOwnedList = [...ownedSets].sort((a, b) => a.year - b.year);

  const seriesNames = [...new Set(LegoWishlist.map((set) => set.series))];

  return {
    sortedLegoWishlist,
    sortedOwnedList,
    seriesNames,
  };
};
