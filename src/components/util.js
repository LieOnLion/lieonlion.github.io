export const gcn = (options, styles) => {
  const keys = Object.keys(options.variants);
  let variantClassNames = "";

  keys.forEach(key => {
    const selected = styles[key];
    const selectedValue = options.variants[key][selected];
    if (selected && selectedValue) {
      variantClassNames += wsats(selectedValue);
    } else {
      variantClassNames += wsats(options.variants[key][options.default[key]]);
    }
  });

  return(options.base + variantClassNames);
}

export const wsats = (string) => {
  return (" " + string);
}