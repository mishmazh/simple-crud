const VALUE_MIN_LENGTH = 3;
const VALUE_MAX_LENGTH = 30;

export const isValid = (value: string) => {
  return value.length >= VALUE_MIN_LENGTH && value.length <= VALUE_MAX_LENGTH;
};
