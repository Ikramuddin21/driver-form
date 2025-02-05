export const generateId = () => {
  const id = Math.random().toString(20).substring(2, 10);
  return id;
};
