import { LegoWishlist } from "../../const/lego";

export const useListOrganizer = () => {
  const ownedSetsList = [
    75349, 75328, 75304, 10275, 76187, 75277, 75350, 75351, 75327, 75343, 76199,
    10370, 21327, 10311, 10369, 10295, 10343, 10331, 76419, 76414, 21342, 10266,
    31133, 76191, 75330,
  ];

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

  return {
    sortedLegoWishlist,
    sortedOwnedList,
  };
};
