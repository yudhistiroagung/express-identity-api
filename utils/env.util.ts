import { throwIfMissing } from './common.util';

const env = process.env;

const getString = (key: string) => {
  const val = env[key];
  throwIfMissing(val, `Cannot get env value with key ${key}`);

  return val.toString();
}

const getNumber = (key: string) => {
  const val = env[key];
  throwIfMissing(val, `Cannot get env value with key ${key}`);

  const numVal = parseInt(val, 10);

  if(numVal === NaN) {
    throw `env value with ${key} is not a number`;
  }

  return numVal;
}
