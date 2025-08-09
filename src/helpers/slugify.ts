export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // Quita acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}