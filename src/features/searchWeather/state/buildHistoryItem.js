import uuid from 'uuid';

export const buildHistoryItem = (weather, tempType) => {
  return {
    id: uuid.v4(),
    ...weather,
    tempType,
    date: new Date().toLocaleDateString()
  };
};
