import { TwoNumberSumList } from './interfaces/main.interface';
import { AppArgvs } from './interfaces/utils.interface';
import { removeDuplicates } from './utils/array.util';

/**
 * Returns a list of the pairs of numbers that the sum gives the result of the target value;
 * @param appArgvs AppArgvs
 * @returns TwoNumberSumList
 */
export const getTwoNumberSumList = ({
  array,
  targetSum,
}: AppArgvs): TwoNumberSumList => {
  const data: number[] = removeDuplicates(array);
  const optionList = new Set<number>();
  const matches: TwoNumberSumList = [];

  for (const num of data) {
    const complement = targetSum - num;
    if (optionList.has(complement)) {
      matches.push([num, complement]);
    }
    optionList.add(num);
  }

  return matches;
};
