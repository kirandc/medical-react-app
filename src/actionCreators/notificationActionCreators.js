export const addAlert = (text, style) => ({
  type: 'ADD_ALERT',
  text,
  style,
});

export const removeAlert = id => ({
  type: 'REMOVE_ALERT',
  id,
});
