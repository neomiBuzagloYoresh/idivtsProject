import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "../cmps/ItemList";
import { Loader } from "../cmps/Loader";

import {
  loadItems,
  setCategoryStore,
  setPageStore,
} from "../store/actions/itemActions";

export const MainAppPage = () => {
  useEffect(() => {
    dispatch(loadItems());
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    loadItems(items);
  }, []);

  const { items } = useSelector(
    (state) => state.itemModule
  );

  const onSetPage = useCallback(async (val) => {
    await dispatch(setPageStore(val));
    dispatch(loadItems());
  }, []);

  const setCategory = useCallback(async (items) => {
    await dispatch(setCategoryStore(items));
    dispatch(loadItems());
  }, []);

  if (!items) return <Loader />;

  return (
    <section className="main-app-container">
      <ItemList
        setCategory={setCategory}
        items={items}
        onSetPage={onSetPage}
      />
    </section>
  );
};
