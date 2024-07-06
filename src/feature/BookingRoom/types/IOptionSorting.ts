import { SortingType } from "./SortingType";
import { IOption } from "../../../shared/types";

export interface IOptionSorting extends IOption {
  value: SortingType;
}
