export const updateListElement = (list, elementId, key, value) => {
  const listCpy = [...list];
  const index = listCpy.findIndex(el => el.id === elementId);
  listCpy[index][key] = value;
  return listCpy;
};
