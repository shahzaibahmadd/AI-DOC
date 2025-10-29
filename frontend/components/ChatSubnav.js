export default function ChatSubnav({ onSelect }) {
  const items = [
    'DLIMS', 'NADRA', 'DGIP', 'Zameen', 'ECP', 'FBR', 'SECP', 'PSP', 'Punjab Police'
  ];

  return (
    <div className="sticky top-[57px] z-10 border-b border-gray-800 bg-gray-900/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-3 flex gap-3 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect?.(item)}
            className="whitespace-nowrap rounded-full border border-emerald-900/40 bg-gray-900/60 px-4 py-2 text-[15px] text-gray-300 hover:text-white hover:border-emerald-800 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}


