const TarotCard = ({ position, label }) => (
  <div className="relative">
    <div className="w-24 h-32 flex items-center justify-center bg-slate-200 border-2 rounded-lg shadow-md hover:bg-slate-300 transition-colors cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-slate-600">{position}</span>
      </div>
    </div>
    <div className="mt-[2px] text-xs text-center text-slate-600 max-w-24">
      {label}
    </div>
  </div>
);

export const Celtic = () => {
  return (
    <main className="flex flex-row">
      <section className="flex flex-col pr-6 sm:pr-12 gap-2">
        <TarotCard position={1} label={"ee"} />
        <TarotCard position={1} label={"ee"} />
        <TarotCard position={1} label={"ee"} />
        <TarotCard position={1} label={"ee"} />
      </section>
      <section className="flex flex-col justify-center">
        <TarotCard position={1} label={"ee"} />
      </section>
      <section className="flex flex-col justify-evenly sm:px-12">
        <TarotCard position={1} label={"ee"} />
        <TarotCard position={1} label={"ee"} />
        <TarotCard position={1} label={"ee"} />
      </section>

      <section className="flex flex-col justify-center">
        <TarotCard position={1} label={"ee"} />
      </section>
    </main>
  );
};
