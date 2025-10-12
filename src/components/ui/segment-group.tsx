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
        className="flex gap-0.5 bg-slate-100 relative p-1 rounded-xl"
      >
        <SegmentGroup.Indicator className="bg-white z-10 rounded-lg shadow-md h-(--height) w-(--width) transition-all duration-300" />
        {options.map((option) => (
          <SegmentGroup.Item
            key={option}
            value={option}
            className="flex flex-1 items-center justify-center select-none cursor-pointer text-sm font-medium px-4 py-3 z-20 text-slate-600 hover:text-slate-900 data-[state=checked]:text-slate-900 data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-colors duration-200"
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
