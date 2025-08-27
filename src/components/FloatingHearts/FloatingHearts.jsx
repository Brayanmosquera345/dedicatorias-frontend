export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute select-none animate-heart-float"
          style={{
            left: `${Math.random() * 100}%`,
            // Usa CSS vars para duración y pequeño drift horizontal si quieres
            ["--dur"]: `${12 + Math.random() * 10}s`,
            fontSize: `${16 + Math.random() * 24}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
