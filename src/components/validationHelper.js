const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const isRequired = (val) => {
  if (val === 0) {
    return true;
  }
  return val && `${val}`.length > 0;
};

export const isEmail = (val) => {
  if (!val) {
    return true;
  }
  return emailRegex.test(val);
};

export const isInteger = (val) => {
  if (!val) {
    return true;
  }
  return !(/\D/.test(val));
};
