import { itemService } from "../../services/itemService.js";

export function loadItems() {
  return async (dispatch, getState) => {
    try {
      const { category } = getState().itemModule;
      const { page } = getState().itemModule;
      const items = await itemService.query(category, page);

      dispatch({ type: "SET_ITEMS", items });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function setCategoryStore(items) {
  return async (dispatch) => {
    dispatch({ type: "SET_CATEGORY", items });
  };
}

export function setPageStore(pageNum) {
  return async (dispatch) => {
    dispatch({ type: "SET_PAGE", pageNum });
  };
}
