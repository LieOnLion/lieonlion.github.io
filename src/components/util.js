export const gcn = (styles, selectedVariants) => {
  const keys = Object.keys(styles.variants);
  let variantClassNames = "";

  keys.forEach(key => {
    const selected = selectedVariants[key];
    const selectedValue = styles.variants[key][selected];
    if (selected && selectedValue) {
      variantClassNames += wsats(selectedValue);
    } else {
      variantClassNames += wsats(styles.variants[key][styles.default[key]]);
    }
  });

  return(styles.base + variantClassNames);
}

export const wsats = (string) => {
  return (" " + string);
}