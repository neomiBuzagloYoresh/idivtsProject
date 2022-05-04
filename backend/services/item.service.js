const fs = require("fs");
const axios = require("axios");

module.exports = {
  getItems,
};

const gPageSize = 9;
let gPageIdx = 1;

async function getItems(category = "music", isSetPage) {
  if (gPageIdx) {
    setPageIdx(isSetPage);
  }

  const res = await axios.get(
    `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${gPageIdx}&per_page=${gPageSize}`
  );

  let items = res.data.hits;
  items = _sort(items);

  return items;
}

function setPageIdx(val) {
  if (val === -1) {
    gPageIdx -= 1;
  } else {
    gPageIdx += 1;
  }
}

function _sort(items) {
  return items.sort((t1, t2) => t1.id - t2.id);
}
