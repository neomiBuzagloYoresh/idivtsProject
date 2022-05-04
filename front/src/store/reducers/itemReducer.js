const INITIAL_STATE = {
  items: [],
  category: null,
  currItem: null,
  page: null,
};

export function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.items,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.items,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.pageNum,
      };

    default:
      return state;
  }
}
