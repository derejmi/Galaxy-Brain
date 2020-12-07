export const randomId = () =>
  Math.floor(Math.random() * 100000);

export const updateListElement = (list, elementId, key, value) => {
  const listCpy = [...list];
  const index = listCpy.findIndex(el => el.id === elementId);
  listCpy[index][key] = value;
  return listCpy;
};
