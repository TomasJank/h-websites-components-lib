export declare const isBoolean: (value: any) => boolean;
export declare const isObject: (value: any) => boolean;
export declare const toTitleCase: (word: string) => string;
export declare const kebabToCamel: (string: string) => string;
export declare const camelToDash: (str: string) => string;
export declare const getClasses: (element: string, props: {
    [key: string]: boolean;
}, delimiter?: string, prepend?: string, camelToDashKey?: boolean) => string[];
