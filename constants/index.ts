export const createSlug = (text: string) => {
  if (!text) return null

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]+/g, '')
    .replace(/[\s_.]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/[--]+/g, '-')
    .replace(/[__]+/g, '-')
    .replace(/[..]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim()
}
