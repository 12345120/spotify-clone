export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDvI76QFBMIjB9KPGF7mypbbomMqsFV-UicxJ9CRtx1u-zJaPdbBhY3MO8yZvvtL6jLtxDnteu9QyQexsJt41e2GzyaE57q-Zbtj1Yq2oBcwu9JquYiVDFgdIksaK4rYSYoDeZGBTKL55Q-0cxKAuAY_WGVacO9kd-NRnoYg3p3xhuHEiQY",
};

const reducer = (state, action) => {
  // console.log("reducer ACTION >>> " + action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      break;

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      break;

    case "SET_DISCOVER_WEEKLY":
      console.log('discover_weekly >>> ', action.discover_weekly);
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
