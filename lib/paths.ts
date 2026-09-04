const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a file from public/ when the site is built for a project GitHub Page. */
export function publicAsset(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
