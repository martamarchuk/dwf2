import { SegmentGroup } from "@ark-ui/react/segment-group";

interface SegmentGroupProps {
  value: string;
  onValueChange: (details: { value: string }) => void;
  options: string[];
}

export default function CatalogueSegmentGroup({ value, onValueChange, options }: SegmentGroupProps) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12 px-4">
      <SegmentGroup.Root
        value={value}
        onValueChange={onValueChange}
        orientation="horizontal"
        className="flex flex-col md:flex-row gap-1 bg-slate-200 relative p-1.5 rounded-xl shadow-inner"
      >
        <SegmentGroup.Indicator className="bg-white z-10 rounded-lg shadow-lg h-(--height) w-(--width) transition-all duration-300" />
        {options.map((option) => (
          <SegmentGroup.Item
            key={option}
            value={option}
            className="flex flex-1 items-center justify-center text-center select-none cursor-pointer text-sm font-semibold px-4 py-3.5 z-20 text-slate-500 hover:text-slate-700 data-[state=checked]:text-orange-500 data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-all duration-300 whitespace-nowrap"
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
