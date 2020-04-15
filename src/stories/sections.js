export const Parent = {
  inputs: 'Inputs',
  tabular: 'Tabular',
  features: 'Features'
};

export const Child = {
  button: 'Button',
  radioButton: 'Radio button',
  textInput: 'Text',
  table: 'Table'
};

export const getSection = (parent, child) => {
  if (parent && child) {
    return `${parent}/${child}`;
  }

  return `${parent}`;
};
