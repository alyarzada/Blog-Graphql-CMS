export const isoFormatter = (
  isoDate,
  options = { month: "long", day: "numeric", year: "numeric" }
) => {
  const date = new Date(isoDate);
  const regularDate = date.toLocaleDateString("en-US", options);

  return regularDate;
};
