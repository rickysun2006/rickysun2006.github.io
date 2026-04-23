export function MeshBackground() {
  return (
    <div className="mesh-bg" aria-hidden="true">
      <div
        className="mesh-blob animate-blob-1"
        style={{
          top: "-18%",
          left: "-10%",
          width: "50rem",
          height: "50rem",
          background:
            "radial-gradient(circle at 35% 35%, rgb(var(--grad-a)) 0%, transparent 65%)",
        }}
      />
      <div
        className="mesh-blob animate-blob-2"
        style={{
          top: "-5%",
          right: "-18%",
          width: "48rem",
          height: "48rem",
          background:
            "radial-gradient(circle at 65% 40%, rgb(var(--grad-c)) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
