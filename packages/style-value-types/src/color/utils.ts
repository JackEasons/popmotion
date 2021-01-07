import { floatRegex, isString, singleColorRegex } from '../utils';

/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
export const isColorString = (type: string) => (v: any) => {
  return isString(v) && singleColorRegex.test(v) && v.startsWith(type);
};

export const splitColor = (aName: string, bName: string, cName: string) => (
  v: string
) => {
  const [a, b, c, alpha] = v.match(floatRegex);

  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha !== undefined ? parseFloat(alpha) : 1,
  };
};
