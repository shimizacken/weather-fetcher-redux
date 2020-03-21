export const UnitSymbols = {
  kelvin: 'K',
  celsius: '°C',
  fahrenheit: '°F'
};

export const Units = {
  kelvin: {
    name: 'kelvin',
    value: '',
    symbol: 'K'
  },
  celsius: {
    name: 'celsius',
    value: 'metric',
    symbol: '°C'
  },
  fahrenheit: {
    name: 'fahrenheit',
    value: 'imperial',
    symbol: '°F'
  }
};

export const getUnitNameByValue = value => {
  let result;
  Object.values(Units).forEach(unit => {
    if (unit.value === value) {
      result = unit;
    }
  });
  return result;
};
