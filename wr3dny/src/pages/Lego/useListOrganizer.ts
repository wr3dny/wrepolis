import { LegoWishlist } from "../../const/lego";
import { ownedSetsList } from "../../const/ownedSets";

export const useListOrganizer = () => {
  const ownedSets = LegoWishlist.filter((set) =>
    ownedSetsList.includes(set.setNumber)
  );

  const wantedSets = LegoWishlist.filter(
    (item1) => !ownedSets.some((item2) => item1.setNumber === item2.setNumber)
  );

  const sortedLegoWishlist = [...wantedSets].sort((a, b) => a.price - b.price);

  const sortedOwnedList = [...ownedSets].sort(
    (a, b) => a.setNumber - b.setNumber
  );

  const setSeries = [...new Set(LegoWishlist.map((set) => set.series))];

  //   .map(set => set.series) extracts the series property from each object.

  // new Set(...) removes duplicates.

  // [...new Set(...)] converts the Set back to an array.

  return {
    sortedLegoWishlist,
    sortedOwnedList,
    setSeries,
  };
};
