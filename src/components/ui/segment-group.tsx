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
      <div className="inline-flex bg-white rounded-2xl shadow-lg p-2 gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onValueChange({ value: option })}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
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
