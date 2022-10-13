import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ResourceSummary } from '../types/pokemon';
import { RootState } from '.';

type TypeState = {
  typesList: ResourceSummary[];
  isLoadingTypes: boolean;
  search: string;
};

const initialState: TypeState = {
  typesList: [],
  isLoadingTypes: false,
  search: '',
};

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setTypesList: (state, action: PayloadAction<ResourceSummary[]>) => {
      state.typesList = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIsLoadingTypes: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTypes = action.payload;
    },
  },
});

export const selectTypesList = (state: RootState) => state.types.typesList;
export const selectSearch = (state: RootState) => state.types.search;
export const selectIsLoadingTypes = (state: RootState) =>
  state.types.isLoadingTypes;
export const { setIsLoadingTypes, setSearch, setTypesList } =
  typesSlice.actions;
export default typesSlice.reducer;
