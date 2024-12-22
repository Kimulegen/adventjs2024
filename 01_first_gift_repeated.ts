function prepareGifts(gifts: number[]): number[] {
  const uniqueGifts: number[] = Array.from(new Set(gifts))
  return uniqueGifts.sort((a,b) => a-b);
}