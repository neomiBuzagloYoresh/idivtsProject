import axios from "axios";

async function query(category = "music", isSetPage = null) {
  const res = await axios.get(
    `http://localhost:3030/api/item/`,
    { params: { category, isSetPage } }
  );
  return res.data;
}

export const itemService = {
  query,
};
