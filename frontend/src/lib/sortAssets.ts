export type SortDir = "asc" | "desc";
// accepts both number and string and return numeric or if can not be parssed than Nan
export const sortAssetsByChangePercent = (items: any[], dir: SortDir) => {
  const sorted = [...items]; //not to change original (sort mutates)
  sorted.sort((a, b) => {
    if (dir === "asc") {
      return a.changePercent - b.changePercent;
    }
    return b.changePercent - a.changePercent;
  });
  return sorted;
};
