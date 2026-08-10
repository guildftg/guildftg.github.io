const avatarModules = import.meta.glob("../../assets/images/avatars/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function avatarUrl(filename) {
  const match = Object.entries(avatarModules).find(([path]) => path.endsWith(`/${filename}`));
  return match?.[1];
}

export default function PersonAvatar({ filename, alt, size = "default", className = "" }) {
  const src = avatarUrl(filename);

  return (
    <img
      className={`avatar ${size === "sm" ? "avatar-sm" : ""} ${className}`.trim()}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}
