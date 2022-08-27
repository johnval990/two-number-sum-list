import { AppArgvs } from '../interfaces/utils.interface';
import * as Joi from 'joi';

const schema = Joi.object({
  array: Joi.array().items(Joi.number()).required().label('Argument #1'),
  targetSum: Joi.number().integer().required().label('Argument #2'),
});

/**
 * Obtain and validate the necessary parameter for the application
 * @returns Promise<AppArgvs>
 */
export const getProcessArgvs = async (): Promise<AppArgvs> => {
  const argvs: string[] = process.argv.slice(2);
  if (argvs.length !== 2) {
    throw new Error(
      'Two arguments must be passed. The first must be a list of numbers and the second an integer.',
    );
  }

  const [arg1, arg2] = argvs;
  const array: number[] = arg1.split(',').map((val) => +val);
  const targetSum: number = +arg2;

  const appArgvs: AppArgvs = { array, targetSum };
  await schema.validateAsync(appArgvs);
  return appArgvs;
};
