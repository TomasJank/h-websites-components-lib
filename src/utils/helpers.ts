export const isBoolean = (value): boolean => "boolean" === typeof value;

export const isObject = (value): boolean => "object" === typeof value;

export const toTitleCase = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const kebabToCamel = (string: string): string =>
  string.replace(/-./g, (x) => x[1].toUpperCase());

export const camelToDash = (str: string): string =>
  str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

export const getClasses = (
  element: string,
  props: { [key: string]: boolean },
  delimiter = "--",
  prepend = "",
  camelToDashKey = false
): string[] => {
  return Object.entries(props).map(([key, value]) => {
    if (camelToDashKey) key = camelToDash(key);
    if (!value || !isBoolean(value)) return;
    return `${element}${delimiter}${prepend ? prepend : ""}${camelToDash(key)}`;
  });
};

