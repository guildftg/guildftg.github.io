const artModules = import.meta.glob("../../assets/images/art/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function findArt(filename) {
  const match = Object.entries(artModules).find(([path]) => path.endsWith(`/${filename}`));
  return match?.[1];
}

export default function ResponsiveImage({
  baseName,
  extension = "png",
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 1200px",
  eager = false,
}) {
  const baseSrc = findArt(`${baseName}.${extension}`) || findArt(`${baseName}.webp`);
  const variants = [400, 800, 1200]
    .map((width) => {
      const url = findArt(`${baseName}-${width}.webp`);
      return url ? `${url} ${width}w` : null;
    })
    .filter(Boolean)
    .join(", ");

  return (
    <img
      src={baseSrc}
      srcSet={variants || undefined}
      sizes={variants ? sizes : undefined}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
    />
  );
}
