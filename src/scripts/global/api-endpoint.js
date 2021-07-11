import CONFIG from "./config";

const API_ENDPOINT = {
  LIST_RESTO: `${CONFIG.BASE_URL}list`,
  SEARCH_RESTAURANT: `${CONFIG.BASE_URL}search?q=query`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
