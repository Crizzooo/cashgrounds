
export const marginGenerator = (top, right, bottom, left) => {
  let style = {};
  if (top) style.marginTop = top;
  if (right) style.marginRight = right;
  if (bottom) style.marginBottom = bottom;
  if (left) style.marginLeft = left;
  return style;
};

export const paddingGenerator = (top, right, bottom, left) => {
  let style = {};
  if (top) style.paddingTop = top;
  if (right) style.paddingRight = right;
  if (bottom) style.paddingBottom = bottom;
  if (left) style.paddingLeft = left;
  return style;
};
