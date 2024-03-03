import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  width: number;
  height: number;
  selectedSkillsFilter: { value: string; label: string }[];
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
    setWidthAndHeight: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    setSelectedSkillsFilter: (state, action) => {
      state.selectedSkillsFilter = action.payload;
    },
    setHowManyArticlesAndProjectsAreVisible: (state, action) => {
      state.howManyArticlesAreVisible = action.payload.articles;
      state.howManyProjectsAreVisible = action.payload.projects;
    },
    setSkillsFilterSettings: (state, action) => {
      state.selectedSkillsFilter = action.payload.selectedSkills;
      state.howManyArticlesAreVisible = action.payload.articles;
      state.howManyProjectsAreVisible = action.payload.projects;
    },
  },
});

export const {
  setWidthAndHeight,
  setSelectedSkillsFilter,
  setSkillsFilterSettings,
  setHowManyArticlesAndProjectsAreVisible,
} = systemSlice.actions;

export default systemSlice.reducer;
