
import { EventCategory } from "../data/eventsData";

interface CategoryButtonProps {
  category: EventCategory;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryButton = ({ category, isActive, onClick }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors mr-3 min-w-[72px] ${
        isActive 
          ? "bg-localvibe-primary text-white" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span className="text-xl mb-1">{category.icon}</span>
      <span className="text-xs font-medium">{category.name}</span>
    </button>
  );
};
