import service from "./index";

export const postSearchPantry = async (q) =>
  service.post(`/api/search/pantries`, { q: q });

export const getPantries = async () => service.get(`/api/pantries`);

export const getPantryDetail = async (id) => service.get(`/api/pantries/${id}`);
