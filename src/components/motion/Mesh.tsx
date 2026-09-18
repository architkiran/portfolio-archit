// Four pastel blobs drifting behind content. Purely decorative, CSS-animated.
export default function Mesh({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <div className="mesh-blob bg-sky w-[55vw] h-[55vw] -top-[15%] -left-[10%]" style={{ animationDelay: "0s" }} />
      <div className="mesh-blob bg-lilac w-[45vw] h-[45vw] top-[10%] right-[-8%]" style={{ animationDelay: "-8s" }} />
      <div className="mesh-blob bg-mint w-[40vw] h-[40vw] bottom-[-15%] left-[20%]" style={{ animationDelay: "-14s" }} />
      <div className="mesh-blob bg-apricot w-[35vw] h-[35vw] bottom-[5%] right-[15%]" style={{ animationDelay: "-20s" }} />
    </div>
  )
}
