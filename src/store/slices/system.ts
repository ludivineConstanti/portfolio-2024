import { SelectedSkillsFilterProps } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  width: number;
  height: number;
  selectedSkillsFilter: SelectedSkillsFilterProps;
  howManyArticlesAreVisible: number;
  howManyProjectsAreVisible: number;
}

const systemSlice = createSlice({
  name: "system",
  initialState: {
    width: 0,
    height: 0,
    selectedSkillsFilter: [],
    howManyArticlesAreVisible: 0,
    howManyProjectsAreVisible: 0,
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
    },
  },
});

export const { setWidthAndHeight, setSkillsFilterSettings } =
  systemSlice.actions;

export default systemSlice.reducer;
