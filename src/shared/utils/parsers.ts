// unit-test this
export const parseNumber = (i: string, fallback: number): number => {
  const parsed = parseInt(i)
  return Number.isInteger(parsed) ? parsed : fallback
}
