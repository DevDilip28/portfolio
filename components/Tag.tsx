type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[#89928b] transition-colors duration-200 hover:border-white/[0.15] hover:text-[#dce1dc]">
      {label}
    </span>
  );
}
