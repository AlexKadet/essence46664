export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Monogram */}
      <div className="w-10 h-10 border border-deep-ocean rounded-lg flex items-center justify-center">
        <span className="font-display text-sm font-light text-deep-ocean">EAG</span>
      </div>
      
      {/* Wordmark */}
      <div className="text-sm font-display font-light text-deep-ocean hidden sm:block">
        <span className="block text-[0.65rem] uppercase tracking-widest">Essence</span>
        <span className="block text-[0.65rem] uppercase tracking-widest">Aesthetic</span>
      </div>
    </div>
  );
}