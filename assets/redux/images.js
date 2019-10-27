import { createSlice } from "redux-starter-kit";
import axios from "$utils/api";

const preImagesSlice = createSlice({
  initialState: {
    status: 0
  },
  name: "images",
  reducers: {
    imageSucces: (state, action) => {
      return { ...state, status: 0 };
    },
    imageReset: (state, action) => {
      return { ...state, status: 0 };
    },
    imageLoading: (state, action) => {
      return { ...state, status: 1 };
    },
    imageError: (state, action) => {
      return { ...state, status: 2 };
    }
  }
});

const {
  imageSucces,
  imageReset,
  imageLoading,
  imageError,
  ...rest
} = preImagesSlice.actions;

const CancelToken = axios.CancelToken;
let cancelLoadImage = {};

const actions = {
  ...rest,
  loadImage: payload => async dispatch => {
    if (cancelLoadImage[payload.name]) {
      cancelLoadImage[payload.name](`image ${payload.name} canceled`);
      cancelLoadImage[payload.name] = null;
    }
    dispatch(imageReset());
    try {
      dispatch(imageLoading());
      const res = await axios.get(payload.url, {
        responseType: "blob"
        // cancelToken: new CancelToken(function executor(c) {
        //   cancelLoadImage[payload.name] = c;
        // })
      });
      const reader = new window.FileReader();
      reader.readAsDataURL(res.data);
      reader.onload = function() {
        const imageDataUrl = reader.result;
        dispatch(
          imageSucces({
            url: imageDataUrl,
            name: payload.name,
            originalUrl: payload.url
          })
        );
      };
      console.log(res);
      return res.data;
    } catch (err) {
      dispatch(imageError({}));
      return err;
    }
  }
};

export const imagesSlice = {
  reducer: preImagesSlice.reducer,
  actions
};
