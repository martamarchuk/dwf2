import { SegmentGroup } from "@ark-ui/react/segment-group";

interface SegmentGroupProps {
  value: string;
  onValueChange: (details: { value: string }) => void;
  options: string[];
}

export default function CatalogueSegmentGroup({ value, onValueChange, options }: SegmentGroupProps) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <SegmentGroup.Root
        value={value}
        onValueChange={onValueChange}
        orientation="horizontal"
        className="flex gap-1 bg-slate-200 relative p-1.5 rounded-xl shadow-inner"
      >
        <SegmentGroup.Indicator className="bg-gradient-to-br from-orange-500 to-orange-600 z-10 rounded-lg shadow-lg h-(--height) w-(--width) transition-all duration-300" />
        {options.map((option) => (
          <SegmentGroup.Item
            key={option}
            value={option}
            className="flex flex-1 items-center justify-center select-none cursor-pointer text-sm font-semibold px-4 py-3.5 z-20 text-slate-500 hover:text-slate-700 data-[state=checked]:text-white data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-all duration-300"
          >
            <SegmentGroup.ItemText>{option}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}
