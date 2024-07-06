import { IOptionSorting, SortingType } from "../types";

export const sortingOptions: IOptionSorting[] = [
  {
    id: "1",
    value: SortingType.PRICE_ASC,
    label: "Price: Low to High",
  },
  {
    id: "2",
    value: SortingType.PRICE_DESC,
    label: "Price: High to Low",
  },
  {
    id: "3",
    value: SortingType.NAME_ASC,
    label: "Name: A to Z",
  },
  {
    id: "4",
    value: SortingType.NAME_DESC,
    label: "Name: Z to A",
  },
];
