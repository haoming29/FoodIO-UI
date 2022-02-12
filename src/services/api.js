import service from "./index";

export const postSearchPantry = async (q) =>
  service.post(`/api/pantries/search`, { q: q });

export const getPantries = async () => service.get(`/api/pantries`);

export const getPantryDetail = async (id) => service.get(`/api/pantries/${id}`);
