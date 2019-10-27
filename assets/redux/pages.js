import { createSlice } from "redux-starter-kit";
import axios from "$utils/api";

const prePagesSlice = createSlice({
  initialState: {
    status: 0
  },
  name: "pages",
  reducers: {
    pageSucces: (state, action) => {
      return { ...state, status: 0 };
    },
    pageReset: (state, action) => {
      return { ...state, status: 0 };
    },
    pageLoading: (state, action) => {
      return { ...state, status: 1 };
    },
    pageError: (state, action) => {
      return { ...state, status: 2 };
    }
  }
});

const { ...rest } = prePagesSlice.actions;

const actions = {
  ...rest
};

export const pagesSlice = {
  reducer: prePagesSlice.reducer,
  actions
};
