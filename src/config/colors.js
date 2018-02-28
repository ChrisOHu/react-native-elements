let colors =  {
  primary: '#2089dc',
  primary1: '#4d86f7',
  primary2: '#6296f9',
  secondary: '#8F0CE8',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  error: '#ff190c',
};

export function setColors (newColors) {
  return colors = {
    ...colors,
    ...newColors
  }
}

export default colors

