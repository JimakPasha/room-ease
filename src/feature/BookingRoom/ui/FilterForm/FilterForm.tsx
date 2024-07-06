import { FC } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { sortingOptions } from "../../constants";
import { SortingType } from "../../types";
import { Checkbox } from "../../../../shared/ui/Checkbox";
import { Select } from "../../../../shared/ui/Select";
import { ToggleListView } from "../../../../shared/ui";
import { ViewType } from "../../../../shared/types";

import { FilterActionsBox, StyledFullWidthBox } from "./FilterForm.styles";

interface FilterFormProps {
  sortValue: SortingType;
  checkAllAvailability: boolean;
  view: ViewType;
  onChangeAvailability: (isAllAvailability: boolean) => void;
  onChangeView: (view: ViewType) => void;
  onSort: (sortBy: SortingType) => void;
}

export const FilterForm: FC<FilterFormProps> = ({
  sortValue,
  checkAllAvailability,
  view,
  onChangeAvailability,
  onChangeView,
  onSort,
}) => {
  const handleChangeSort = (value: SortingType) => {
    onSort(value);
  };

  return (
    <StyledFullWidthBox>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel-content"
          id="panel-header"
        >
          Filters
        </AccordionSummary>
        <AccordionDetails>
          <StyledFullWidthBox>
            <Select<SortingType>
              value={sortValue}
              onChange={handleChangeSort}
              label="Sort By"
              fullWidth
              options={sortingOptions}
            />
            <FilterActionsBox>
              <Checkbox
                checked={checkAllAvailability}
                label="Check availability of all"
                onChange={onChangeAvailability}
              />
              <ToggleListView view={view} onChangeView={onChangeView} />
            </FilterActionsBox>
          </StyledFullWidthBox>
        </AccordionDetails>
      </Accordion>
    </StyledFullWidthBox>
  );
};
