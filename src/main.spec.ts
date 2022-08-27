import { AppArgvs } from './interfaces/utils.interface';
import { getTwoNumberSumList } from './main';

describe('main', () => {
  it('should find matches for the target #12', async () => {
    const argvs: AppArgvs = {
      array: [1, 9, 5, 0, 20, -4, 12, 16, 7],
      targetSum: 12,
    };
    const resultList = getTwoNumberSumList(argvs);

    expect(resultList).toEqual([
      [12, 0],
      [16, -4],
      [7, 5],
    ]);
  });

  it('should find matches for the target #54', async () => {
    const argvs: AppArgvs = {
      array: [80, -5, 40, 10, 59, 0, 1, 53, 6],
      targetSum: 54,
    };
    const resultList = getTwoNumberSumList(argvs);

    expect(resultList).toEqual([
      [59, -5],
      [53, 1],
    ]);
  });

  it('should find matches for the target #7', async () => {
    const argvs: AppArgvs = {
      array: [1, 6, 3, -1, 6, 9, 67, 4, 3, 1, 8, 6, 3],
      targetSum: 7,
    };
    const resultList = getTwoNumberSumList(argvs);

    expect(resultList).toEqual([
      [6, 1],
      [4, 3],
      [8, -1],
    ]);
  });

  it('should remove duplicate values', async () => {
    const argvs: AppArgvs = {
      array: [2, 2, 2, 3, 3, 3],
      targetSum: 5,
    };
    const resultList = getTwoNumberSumList(argvs);

    expect(resultList).toEqual([[3, 2]]);
  });

  it('should return an empty array if no matches are found', async () => {
    const argvs: AppArgvs = {
      array: [1, 2, 3, 4, 5],
      targetSum: 1000,
    };
    const resultList = getTwoNumberSumList(argvs);

    expect(resultList.length).toBe(0);
  });
});
