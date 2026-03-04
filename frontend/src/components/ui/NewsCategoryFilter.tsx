import type { NewsCategory } from "../../types/news";

// In dropdown we will have already created categories or all
export type NewsCategoryFilterValue = "all" | NewsCategory;

type Props = {
  value: NewsCategoryFilterValue;
  onChange: (next: NewsCategoryFilterValue) => void;
};

const NewsCategoryFilter = ({ value, onChange }: Props) => {
  return (
    <div className="mt-4">
      <div>ge</div>
    </div>
  );
};

export default NewsCategoryFilter;
