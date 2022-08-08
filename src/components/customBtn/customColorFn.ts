const ColorMapping = (color: string): string => {
  let code = '';
  switch (color) {
    case 'green':
      code = '#1eff45';
      break;
    case 'blue':
      code = '#2bd2ff';
      break;
    case 'type':
      code = '#009dff';
      break;
    case 'yellow':
      code = '#fff200';
      break;
    case 'orange':
      code = '#ffa100';
      break;
    default:
      code = '#ff1f71';
  }

  return `background: ${code}; box-shadow: 0 0 5px ${code} 0 0 15px ${code} 0 0 30px ${code} 0 0 60px ${code};`;
};

export default ColorMapping;
