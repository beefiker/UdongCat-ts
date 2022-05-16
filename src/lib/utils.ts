export function sleep(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface regexModel {
  from: string;
  to: string;
}
export const formatter = (text: string, regex: Array<regexModel>): string => {
  let _ = text;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of regex) {
    _ = _.replace(`{${item.from}}`, item.to);
  }

  return _;
};
