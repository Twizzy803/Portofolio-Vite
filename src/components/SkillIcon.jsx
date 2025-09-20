export default function SkillIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 backdrop-blur-md p-1 rounded-md inline m-2 bg-[var(--color-tertinary)]/80 ring-2 shadow-xl"
    />
  );
}
