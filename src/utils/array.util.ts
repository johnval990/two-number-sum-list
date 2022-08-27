/**
 * Remove all duplicate numbers
 * @param Array<number>
 * @returns Array<number>
 */
export const removeDuplicates = (array: number[]): number[] => {
  return [...new Set(array)];
};
