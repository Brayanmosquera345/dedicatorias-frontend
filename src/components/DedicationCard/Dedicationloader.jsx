export default function DedicationLoader() {
  return (
    <div className="rounded-2xl relative overflow-hidden h-full w-full md:w-2/3 lg:w-1/3 border border-divider bg-divider/10">
      <div className="z-30 size-full relative flex flex-col justify-between py-6 animate-pulse">
        {/* Header */}
        <header className="flex flex-col items-center gap-2 w-full text-center">
          <div className="h-10 w-10 rounded-full bg-divider/50"></div>
          <div className="h-5 w-3/4 rounded bg-divider/50"></div>
          <div className="h-4 w-1/2 rounded bg-divider/50"></div>
        </header>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-2 w-full text-center mt-6">
          <div className="h-12 w-5/6 rounded-lg bg-divider/50"></div>
          <div className="h-4 w-2/4 rounded bg-divider/50"></div>
        </footer>
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-20 h-full w-full bg-divider/50"></div>
      <div className="size-full inset-0 absolute bg-divider/50 z-10"></div>
    </div>
  );
}
