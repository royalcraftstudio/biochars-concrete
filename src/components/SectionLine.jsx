const SectionLine = ({ text }) => {
  return (
    <div className="flex items-center gap-6 my-24">
      <div className="flex-1 h-px bg-gray-200"></div>

      {text && (
        <span className="font-athiti text-2xl font-semibold uppercase tracking-widest text-gray-900">
          {text}
        </span>
      )}

      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
  );
};

export default SectionLine;
