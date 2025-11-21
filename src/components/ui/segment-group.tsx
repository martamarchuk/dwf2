interface CatalogueSegmentGroupProps {
  value: string;
  onValueChange: (details: { value: string }) => void;
  options: string[];
}

export default function CatalogueSegmentGroup({
  value,
  onValueChange,
  options,
}: CatalogueSegmentGroupProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg p-2 gap-2 w-full sm:w-auto max-w-4xl">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onValueChange({ value: option })}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
              value === option
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
