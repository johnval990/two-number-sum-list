import { AppArgvs } from './interfaces/utils.interface';
import { getTwoNumberSumList } from './main';
import { getProcessArgvs } from './utils/argv.util';

/**
 * Main execution method
 */
async function init(): Promise<void> {
  try {
    const argvs: AppArgvs = await getProcessArgvs();
    const resultList = getTwoNumberSumList(argvs);

    if (resultList.length) {
      for (const [num1, num2] of resultList) {
        process.stdout.write(`${num1},${num2}\n`);
      }
    } else {
      process.stdout.write('No results found for the entered parameters');
    }
  } catch (error) {
    process.stderr.write((error as Error).message);
  }
}

init();
