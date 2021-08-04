export const incAC = () => ({ type: 'INC' });
export const decAC = () => ({ type: 'DEC' });
export const randAC = (payload) => ({
  type: 'RAND',
  payload: Math.floor(Math.random() * 10),
});
