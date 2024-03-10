import { SelectedSkillsFilterProps, storageKey } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  width: number;
  height: number;
  selectedSkillsFilter: SelectedSkillsFilterProps;
  howManyArticlesAreVisible: number;
  howManyProjectsAreVisible: number;
  alreadyUsedFilter: boolean;
}

const systemSlice = createSlice({
  name: "system",
  initialState: {
    width: 0,
    height: 0,
    selectedSkillsFilter: [],
    howManyArticlesAreVisible: 0,
    howManyProjectsAreVisible: 0,
    alreadyUsedFilter: false,
  } as InitialStateProps,
  reducers: {
    setWidthAndHeight: (
      state,
      { payload }: { payload: { width: number; height: number } },
    ) => {
      state.width = payload.width;
      state.height = payload.height;
    },
    setSkillsFilterSettings: (
      state,
      {
        payload,
      }: {
        payload: {
          selectedSkills: SelectedSkillsFilterProps;
          articles: number;
          projects: number;
        };
      },
    ) => {
      state.selectedSkillsFilter = payload.selectedSkills;
      state.howManyArticlesAreVisible = payload.articles;
      state.howManyProjectsAreVisible = payload.projects;
      if (state.alreadyUsedFilter === false) {
        state.alreadyUsedFilter = true;
        if (typeof Storage !== "undefined") {
          localStorage.setItem(storageKey.alreadyUsedFilter, "true");
        }
      }
    },
    setAlreadyUsedFilter: (state) => {
      state.alreadyUsedFilter = true;
    },
  },
});

export const {
  setWidthAndHeight,
  setSkillsFilterSettings,
  setAlreadyUsedFilter,
} = systemSlice.actions;

export default systemSlice.reducer;
