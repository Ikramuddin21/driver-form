export const generateId = () => {
  const id = Math.random().toString(36).substring(2, 10);
  return id;
};
